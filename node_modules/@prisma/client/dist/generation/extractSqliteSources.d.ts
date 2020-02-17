export interface DatasourceOverwrite {
    name: string;
    url: string;
}
export declare function extractSqliteSources(datamodel: string, cwd: string, outputDir: string): DatasourceOverwrite[];
