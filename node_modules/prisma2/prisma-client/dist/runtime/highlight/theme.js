"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
exports.orange = chalk_1.default.rgb(246, 145, 95);
exports.darkBrightBlue = chalk_1.default.rgb(107, 139, 140);
exports.blue = chalk_1.default.cyan;
exports.brightBlue = chalk_1.default.rgb(127, 155, 155);
exports.identity = str => str;
exports.theme = {
    keyword: exports.blue,
    entity: exports.blue,
    value: exports.brightBlue,
    punctuation: exports.darkBrightBlue,
    directive: exports.blue,
    function: exports.blue,
    variable: exports.brightBlue,
    string: chalk_1.default.greenBright,
    boolean: exports.orange,
    number: chalk_1.default.cyan,
    comment: chalk_1.default.grey,
};
//# sourceMappingURL=theme.js.map