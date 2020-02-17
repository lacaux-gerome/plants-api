export interface GenerateInFolderOptions {
    projectDir: string;
    useLocalRuntime?: boolean;
    transpile?: boolean;
}
export declare function generateInFolder({ projectDir, useLocalRuntime, transpile, }: GenerateInFolderOptions): Promise<number>;
