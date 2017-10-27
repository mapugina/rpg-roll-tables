import {IRollTable} from "./IRollTable";
import {ITableEntry} from "./ITableEntry";

export class SimpleRollTable<T> implements IRollTable<T> {
    constructor(private entries: Array<ITableEntry<T>>, public name = '') {
    }

    lookup(location: number) {
        for (let entry of this.entries) {
            if (entry.matches(location)) {
                return entry.description;
            }
        }
        return null;
    }
}