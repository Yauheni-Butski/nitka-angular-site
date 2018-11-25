import { NavLink } from './navLink';

export class Section{
    navLinks: NavLink[];

    constructor(data: any) {
        Object.assign(this, data);
    }
}