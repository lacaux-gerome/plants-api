"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dmmf_types_1 = require("./dmmf-types");
exports.DMMF = dmmf_types_1.DMMF;
var dmmf_1 = require("./dmmf");
exports.DMMFClass = dmmf_1.DMMFClass;
var deep_set_1 = require("./utils/deep-set");
exports.deepGet = deep_set_1.deepGet;
exports.deepSet = deep_set_1.deepSet;
var query_1 = require("./query");
exports.makeDocument = query_1.makeDocument;
exports.transformDocument = query_1.transformDocument;
var BrowserEngine_1 = require("@prisma/engine-core/dist/BrowserEngine");
exports.Engine = BrowserEngine_1.BrowserEngine;
var debug_1 = require("debug");
exports.debugLib = debug_1.default;
//# sourceMappingURL=browser.js.map