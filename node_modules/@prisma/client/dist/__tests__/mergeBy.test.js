"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeBy_1 = require("../runtime/mergeBy");
test('basic mergeBy', () => {
    const arr1 = [
        {
            name: 'db',
            url: 'file:old-url.db',
        },
    ];
    const arr2 = [
        {
            name: 'db',
            url: 'file:new-url.db',
        },
    ];
    expect(mergeBy_1.mergeBy(arr1, arr2, a => a.name)).toMatchInlineSnapshot(`
        Array [
          Object {
            "name": "db",
            "url": "file:new-url.db",
          },
        ]
    `);
});
test('mergeBy should merge last item', () => {
    const arr1 = [
        {
            name: 'db',
            url: 'file:old-url.db',
        },
    ];
    const arr2 = [
        {
            name: 'db',
            url: 'file:new-url.db',
        },
        {
            name: 'db',
            url: 'file:new-url2.db',
        },
    ];
    expect(mergeBy_1.mergeBy(arr1, arr2, a => a.name)).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "db",
        "url": "file:new-url2.db",
      },
    ]
  `);
});
//# sourceMappingURL=mergeBy.test.js.map