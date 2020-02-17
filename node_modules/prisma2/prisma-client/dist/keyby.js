"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyBy = (collection, iteratee) => {
    return collection.reduce((acc, curr) => {
        acc[iteratee(curr)] = curr;
        return acc;
    }, {});
};
//# sourceMappingURL=keyby.js.map