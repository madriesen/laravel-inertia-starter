import {format} from 'date-fns';

export function toDateString(date: string): string {
    return format(new Date(date), 'yyyy-MM-dd');
}
