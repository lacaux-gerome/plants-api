"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pick(obj, keys) {
    return Object.keys(obj)
        .filter(key => keys.includes(key))
        .reduce((result, key) => {
        result[key] = obj[key];
        return result;
    }, {});
}
exports.pick = pick;
//# sourceMappingURL=pick.js.map