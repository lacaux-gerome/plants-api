"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity = str => str || '';
const browserChalk = new Proxy(identity, {
    get: (obj, prop) => {
        return browserChalk;
    },
    apply: (target, that, args) => {
        return target(args[0]);
    },
});
exports.default = browserChalk;
//# sourceMappingURL=browser-chalk.js.map