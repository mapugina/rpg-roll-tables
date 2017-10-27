import {SingleTableEntry} from "./SingleTableEntry";
import {RangeTableEntry} from "./RangeTableEntry";

export function EntryFactoryFunction(entry: any) {
    if (entry.min && entry.max) {
        return new RangeTableEntry(entry.min, entry.max, entry.description);
    }
    else if (entry.point) {
        return new SingleTableEntry(entry.point, entry.description);
    }
    else {
        throw new Error('No suitable entry type')
    }
}