"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const strip_ansi_1 = __importDefault(require("strip-ansi"));
const deep_set_1 = require("./deep-set");
const stringifyObject_1 = __importDefault(require("./stringifyObject"));
const DIM_TOKEN = '@@__DIM_POINTER__@@';
function printJsonWithErrors(ast, keyPaths, valuePaths, missingItems = []) {
    let obj = ast;
    for (const { path, type } of missingItems) {
        obj = deep_set_1.deepSet(obj, path, type);
    }
    return stringifyObject_1.default(obj, {
        indent: '  ',
        transformLine: ({ indent, key, value, stringifiedValue, eol, path }) => {
            const dottedPath = path.join('.');
            const keyError = keyPaths.includes(dottedPath);
            const valueError = valuePaths.includes(dottedPath);
            const missingItem = missingItems.find(item => item.path === dottedPath);
            let valueStr = stringifiedValue;
            if (missingItem) {
                // trim away the '' from the string
                if (typeof value === 'string') {
                    valueStr = valueStr.slice(1, valueStr.length - 1);
                }
                const isRequiredStr = missingItem.isRequired ? '' : '?';
                const prefix = missingItem.isRequired ? '+' : '?';
                const color = missingItem.isRequired ? chalk_1.default.greenBright : chalk_1.default.green;
                let output = color(prefixLines(key + isRequiredStr + ': ' + valueStr + eol, indent, prefix));
                if (!missingItem.isRequired) {
                    output = chalk_1.default.dim(output);
                }
                return output;
            }
            else {
                const isOnMissingItemPath = missingItems.some(item => dottedPath.startsWith(item.path));
                const isOptional = key[key.length - 2] === '?';
                if (isOptional) {
                    key = key.slice(1, key.length - 1);
                }
                if (isOptional && typeof value === 'object' && value !== null) {
                    valueStr = valueStr
                        .split('\n')
                        .map((line, index, arr) => (index === arr.length - 1 ? line + DIM_TOKEN : line))
                        .join('\n');
                }
                if (isOnMissingItemPath && typeof value === 'string') {
                    valueStr = valueStr.slice(1, valueStr.length - 1);
                    if (!isOptional) {
                        valueStr = chalk_1.default.bold(valueStr);
                    }
                }
                if ((typeof value !== 'object' || value === null) && !valueError && !isOnMissingItemPath) {
                    valueStr = chalk_1.default.dim(valueStr);
                }
                const keyStr = keyError ? chalk_1.default.redBright(key) : key;
                valueStr = valueError ? chalk_1.default.redBright(valueStr) : valueStr;
                // valueStr can be multiple lines if it's an object
                let output = indent + keyStr + ': ' + valueStr + (isOnMissingItemPath ? eol : chalk_1.default.dim(eol));
                // if there is an error, add the scribble lines
                // 3 options:
                // error in key, but not in value
                // error in value, but not in key
                // error in both
                if (keyError || valueError) {
                    const lines = output.split('\n');
                    const keyLength = String(key).length;
                    const keyScribbles = keyError ? chalk_1.default.redBright('~'.repeat(keyLength)) : ' '.repeat(keyLength);
                    const valueLength = valueError ? getValueLength(indent, key, value, stringifiedValue) : 0;
                    const hideValueScribbles = Boolean(valueError && (typeof value === 'object' && value !== null));
                    const valueScribbles = valueError ? '  ' + chalk_1.default.redBright('~'.repeat(valueLength)) : '';
                    // Either insert both keyScribles and valueScribbles in one line
                    if (keyScribbles && keyScribbles.length > 0 && !hideValueScribbles) {
                        lines.splice(1, 0, indent + keyScribbles + valueScribbles);
                    }
                    // or the valueScribbles for a multiline string
                    if (keyScribbles && keyScribbles.length > 0 && hideValueScribbles) {
                        lines.splice(lines.length - 1, 0, indent.slice(0, indent.length - 2) + valueScribbles);
                    }
                    output = lines.join('\n');
                }
                return output;
            }
        },
    });
}
exports.printJsonWithErrors = printJsonWithErrors;
function getValueLength(indent, key, value, stringifiedValue) {
    if (value === null) {
        return 4;
    }
    if (typeof value === 'string') {
        return value.length + 2; // +2 for the quotes
    }
    if (typeof value === 'object') {
        return getLongestLine(`${key}: ${strip_ansi_1.default(stringifiedValue)}`) - indent.length;
    }
    return String(value).length;
}
function getLongestLine(str) {
    return str.split('\n').reduce((max, curr) => (curr.length > max ? curr.length : max), 0);
}
function prefixLines(str, indent, prefix) {
    return str
        .split('\n')
        .map((line, index, arr) => index === 0 ? prefix + indent.slice(1) + line : index < arr.length - 1 ? prefix + line.slice(1) : line)
        .map(line => {
        // we need to use a special token to "mark" a line a "to be dimmed", as chalk (or rather ansi) doesn't allow nesting of dimmed & colored content
        return strip_ansi_1.default(line).includes(DIM_TOKEN)
            ? chalk_1.default.dim(line.replace(DIM_TOKEN, ''))
            : line.includes('?')
                ? chalk_1.default.dim(line)
                : line;
    })
        .join('\n');
}
//# sourceMappingURL=printJsonErrors.js.map