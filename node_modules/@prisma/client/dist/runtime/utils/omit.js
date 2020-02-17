"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function omit(object, path) {
    const result = {};
    const paths = Array.isArray(path) ? path : [path];
    for (const key in object) {
        if (object.hasOwnProperty(key) && !paths.includes(key)) {
            result[key] = object[key];
        }
    }
    return result;
}
exports.omit = omit;
//# sourceMappingURL=omit.js.map