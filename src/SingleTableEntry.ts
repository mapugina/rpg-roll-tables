import {ITableEntry} from "./ITableEntry";

export class SingleTableEntry<T> implements ITableEntry<T> {
    constructor(public point: number, private _description: T) {

    }

    get description() {
        return this._description
    }

    public matches(candidate: number) {
        return this.point === candidate;
    }
}