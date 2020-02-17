"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
function getRandomString(n = 20) {
    return crypto_1.default.randomBytes(n).toString('hex');
}
exports.getRandomString = getRandomString;
//# sourceMappingURL=getRandomString.js.map