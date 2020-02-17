"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strip_indent_1 = __importDefault(require("strip-indent"));
function dedent(str) {
    return strip_indent_1.default(str);
}
exports.dedent = dedent;
//# sourceMappingURL=dedent.js.map