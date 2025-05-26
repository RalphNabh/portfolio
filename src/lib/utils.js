import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'


export const cn = (...inputs) =>{ //cn=class name, this function will use tailwind merge to easily combine class name without writing that much lines of code
    return twMerge(clsx(inputs));
}