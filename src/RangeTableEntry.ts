import {ITableEntry} from "./ITableEntry";

export class RangeTableEntry<T> implements ITableEntry<T> {
    constructor(public min: number,
                public max: number,
                private _description: T) {
        if (min > max) {
            throw new Error(
                `Min value (${min}) can not be greater than max value (${max})`
            );
        }

    }

    get description() {
        return this._description
    }

    public matches(candidate: number) {
        return this.min <= candidate && candidate <= this.max;
    }
}