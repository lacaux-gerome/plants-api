export interface Dictionary<T> {
    [key: string]: T;
}
export declare const keyBy: <T>(collection: T[], iteratee: (value: T) => string) => Dictionary<T>;
