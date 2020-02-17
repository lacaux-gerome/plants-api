"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = require("../runtime");
describe('deepGet', () => {
    test('work with 0', () => {
        const obj = {
            aggregateUser: {
                count: 0,
            },
        };
        const path = ['aggregateUser', 'count'];
        const result = runtime_1.deepGet(obj, path);
        expect(result).toMatchInlineSnapshot(`0`);
    });
    test('work with false', () => {
        const obj = {
            aggregateUser: {
                count: false,
            },
        };
        const path = ['aggregateUser', 'count'];
        expect(runtime_1.deepGet(obj, path)).toMatchInlineSnapshot(`false`);
    });
    test('work with deep object', () => {
        const obj = {
            very: {
                deep: {
                    obj: {
                        with: {
                            deep: 'stuff',
                        },
                    },
                },
            },
        };
        const path = ['very', 'deep', 'obj'];
        expect(runtime_1.deepGet(obj, path)).toMatchInlineSnapshot(`
      Object {
        "with": Object {
          "deep": "stuff",
        },
      }
    `);
    });
    test('return undefined for invalid path', () => {
        const obj = {
            very: {
                deep: {
                    obj: {
                        with: {
                            deep: 'stuff',
                        },
                    },
                },
            },
        };
        const path = ['very', 'deep', 'obj2'];
        expect(runtime_1.deepGet(obj, path)).toMatchInlineSnapshot(`undefined`);
    });
    test('work with array', () => {
        const obj = [
            {
                id: 1,
            },
        ];
        const path = ['0', 'id'];
        expect(runtime_1.deepGet(obj, path)).toMatchInlineSnapshot(`1`);
    });
});
//# sourceMappingURL=deepGet.test.js.map