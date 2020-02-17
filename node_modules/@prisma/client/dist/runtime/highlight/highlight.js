"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prism_1 = require("./prism");
function highlightTS(str) {
    return highlight(str, prism_1.Prism.languages.javascript);
}
exports.highlightTS = highlightTS;
function highlight(str, grammar) {
    const tokens = prism_1.Prism.tokenize(str, grammar);
    return tokens.map(t => prism_1.Token.stringify(t)).join('');
}
//# sourceMappingURL=highlight.js.map