import { DataSource } from '@prisma/generator-helper';
import { DatasourceOverwrite } from './extractSqliteSources';
export declare function serializeDatasources(datasources: DatasourceOverwrite[]): string;
export declare function datasourceToDatasourceOverwrite(datasource: DataSource): DatasourceOverwrite;
