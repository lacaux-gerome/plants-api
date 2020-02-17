"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = require("../runtime/query");
test('document stringify', () => {
    const document = new query_1.Document('query', [
        new query_1.Field({
            name: 'users',
            args: new query_1.Args([
                new query_1.Arg({
                    key: 'mirst',
                    value: 100,
                    error: {
                        didYouMeanArg: 'first',
                        providedName: 'mirst',
                        providedValue: '',
                        type: 'invalidName',
                        originalType: 'String',
                    },
                }),
                new query_1.Arg({
                    key: 'skip',
                    value: '200',
                    error: {
                        type: 'invalidType',
                        providedValue: '200',
                        argName: 'skip',
                        requiredType: {
                            inputType: [
                                {
                                    isList: false,
                                    isRequired: false,
                                    kind: 'scalar',
                                    type: 'number',
                                },
                            ],
                            bestFittingType: {
                                isList: false,
                                isRequired: false,
                                kind: 'scalar',
                                type: 'number',
                            },
                        },
                    },
                }),
                new query_1.Arg({
                    key: 'where',
                    value: new query_1.Args([
                        new query_1.Arg({ key: 'age_gt', value: 10 }),
                        new query_1.Arg({ key: 'age_in', value: [1, 2, 3] }),
                        new query_1.Arg({ key: 'name_in', value: ['hans', 'peter', 'schmidt'] }),
                        new query_1.Arg({
                            key: 'OR',
                            value: [
                                new query_1.Args([
                                    new query_1.Arg({ key: 'age_gt', value: 10123123123 }),
                                    new query_1.Arg({ key: 'email_endsWith', value: 'veryLongNameGoIntoaNewLineNow@gmail.com' }),
                                ]),
                                new query_1.Args([
                                    new query_1.Arg({ key: 'age_gt', value: 10123123123 }),
                                    new query_1.Arg({ key: 'email_endsWith', value: 'veryLongNameGoIntoaNewLineNow@gmail.com' }),
                                    new query_1.Arg({
                                        key: 'OR',
                                        value: [
                                            new query_1.Args([
                                                new query_1.Arg({ key: 'age_gt', value: 10123123123 }),
                                                new query_1.Arg({ key: 'email_endsWith', value: 'veryLongNameGoIntoaNewLineNow@gmail.com' }),
                                            ]),
                                        ],
                                    }),
                                ]),
                            ],
                        }),
                    ]),
                }),
            ]),
            children: [
                new query_1.Field({ name: 'id' }),
                new query_1.Field({
                    name: 'name2',
                    error: {
                        modelName: 'User',
                        didYouMean: 'name',
                        providedName: 'name2',
                        type: 'invalidFieldName',
                        outputType: {
                            fields: [],
                            isEmbedded: false,
                            name: 'User',
                        },
                    },
                }),
                new query_1.Field({
                    name: 'friends',
                    args: new query_1.Args(),
                    children: [new query_1.Field({ name: 'id' }), new query_1.Field({ name: 'name' })],
                }),
                new query_1.Field({
                    name: 'posts',
                    args: new query_1.Args([new query_1.Arg({ key: 'first', value: 200 })]),
                    children: [new query_1.Field({ name: 'id' }), new query_1.Field({ name: 'name' })],
                }),
            ],
        }),
    ]);
    expect(String(document)).toMatchInlineSnapshot(`
    "query {
      users(
        mirst: 100
        skip: \\"200\\"
        where: {
          age_gt: 10
          age_in: [1, 2, 3]
          name_in: [\\"hans\\", \\"peter\\", \\"schmidt\\"]
          OR: [
            {
              age_gt: 10123123123
              email_endsWith: \\"veryLongNameGoIntoaNewLineNow@gmail.com\\"
            },
            {
              age_gt: 10123123123
              email_endsWith: \\"veryLongNameGoIntoaNewLineNow@gmail.com\\"
              OR: [
                {
                  age_gt: 10123123123
                  email_endsWith: \\"veryLongNameGoIntoaNewLineNow@gmail.com\\"
                }
              ]
            }
          ]
        }
      ) {
        id
        name2 # INVALID_FIELD
        friends {
          id
          name
        }
        posts(first: 200) {
          id
          name
        }
      }
    }"
  `);
});
//# sourceMappingURL=document.test.js.map