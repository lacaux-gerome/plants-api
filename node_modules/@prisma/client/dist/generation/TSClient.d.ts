import { GeneratorConfig } from '@prisma/generator-helper';
import 'flat-map-polyfill';
import { DMMFClass } from '../runtime/dmmf';
import { BaseField, DMMF } from '../runtime/dmmf-types';
import { InternalDatasource } from '../runtime/utils/printDatasources';
import { DatasourceOverwrite } from './extractSqliteSources';
interface TSClientOptions {
    version?: string;
    document: DMMF.Document;
    runtimePath: string;
    browser?: boolean;
    datasources: InternalDatasource[];
    generator?: GeneratorConfig;
    platforms?: string[];
    sqliteDatasourceOverrides?: DatasourceOverwrite[];
    schemaDir?: string;
    outputDir: string;
}
export declare class TSClient {
    protected readonly dmmf: DMMFClass;
    protected readonly document: DMMF.Document;
    protected readonly runtimePath: string;
    protected readonly browser: boolean;
    protected readonly outputDir: string;
    protected readonly internalDatasources: InternalDatasource[];
    protected readonly generator?: GeneratorConfig;
    protected readonly platforms?: string[];
    protected readonly sqliteDatasourceOverrides?: DatasourceOverwrite[];
    protected readonly version?: string;
    protected readonly schemaDir?: string;
    constructor({ document, runtimePath, browser, datasources, generator, platforms, sqliteDatasourceOverrides, schemaDir, outputDir, }: TSClientOptions);
    toString(): string;
}
export declare class Model {
    protected readonly model: DMMF.Model;
    protected readonly dmmf: DMMFClass;
    protected outputType?: OutputType;
    protected mapping: DMMF.Mapping;
    constructor(model: DMMF.Model, dmmf: DMMFClass);
    protected get argsTypes(): Stringifiable[];
    toString(): string;
}
export declare class Query {
    protected readonly dmmf: DMMFClass;
    protected readonly operation: 'query' | 'mutation';
    constructor(dmmf: DMMFClass, operation: 'query' | 'mutation');
    toString(): string;
}
export declare class ModelDelegate {
    protected readonly outputType: OutputType;
    protected readonly dmmf: DMMFClass;
    constructor(outputType: OutputType, dmmf: DMMFClass);
    toString(): string;
}
export declare class QueryDelegate {
    protected readonly outputType: OutputType;
    constructor(outputType: OutputType);
    toString(): string;
}
export declare class InputField {
    protected readonly field: DMMF.SchemaArg;
    protected readonly prefixFilter: boolean;
    constructor(field: DMMF.SchemaArg, prefixFilter?: boolean);
    toString(): string;
}
export declare class OutputField {
    protected readonly field: BaseField;
    constructor(field: BaseField);
    toString(): string;
}
export declare class OutputType {
    protected readonly type: DMMF.OutputType;
    name: string;
    fields: DMMF.SchemaField[];
    constructor(type: DMMF.OutputType);
    toString(): string;
}
interface Stringifiable {
    toString(): string;
}
export declare class MinimalArgsType {
    protected readonly args: DMMF.SchemaArg[];
    protected readonly model: DMMF.Model;
    protected readonly action?: DMMF.ModelAction | undefined;
    constructor(args: DMMF.SchemaArg[], model: DMMF.Model, action?: DMMF.ModelAction | undefined);
    toString(): string;
}
export declare class ArgsType {
    protected readonly args: DMMF.SchemaArg[];
    protected readonly model: DMMF.Model;
    protected readonly action?: DMMF.ModelAction | undefined;
    constructor(args: DMMF.SchemaArg[], model: DMMF.Model, action?: DMMF.ModelAction | undefined);
    toString(): string;
}
export declare class InputType {
    protected readonly type: DMMF.InputType;
    constructor(type: DMMF.InputType);
    toString(): string;
}
export declare class Enum {
    protected readonly type: DMMF.Enum;
    constructor(type: DMMF.Enum);
    toString(): string;
}
export {};
