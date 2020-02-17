"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function omit(obj, keys) {
    return Object.keys(obj)
        .filter(key => !keys.includes(key))
        .reduce((result, key) => {
        result[key] = obj[key];
        return result;
    }, {});
}
exports.omit = omit;
//# sourceMappingURL=omit.js.map