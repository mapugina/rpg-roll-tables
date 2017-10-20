interface MatchingFunction {
    (candidate: number): boolean
}

export interface ITableEntry<T> {
    description: T;
    matches: MatchingFunction
}