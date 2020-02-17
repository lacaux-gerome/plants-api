import { DataSource } from '@prisma/generator-helper';
export declare function resolveDatasources(datasources: DataSource[], cwd: string, outputDir: string): DataSource[];
export declare function absolutizeRelativePath(url: string, cwd: string, outputDir: string): string;
