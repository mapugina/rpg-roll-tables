export interface IRollLookup<T> {
    (location: number): T
}

export interface IRollTable<T> {
    lookup: IRollLookup<T>;
    name: string;
}