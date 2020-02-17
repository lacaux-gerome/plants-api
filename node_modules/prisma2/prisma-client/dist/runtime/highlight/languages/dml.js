"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dml = {
    value: { pattern: /\:\s+(\w+)/g },
    punctuation: /(\:|}|{)/g,
    entity: /model\s+\w+/g,
    directive: { pattern: /(@.*)/g },
    comment: /#.*/g,
};
//# sourceMappingURL=dml.js.map