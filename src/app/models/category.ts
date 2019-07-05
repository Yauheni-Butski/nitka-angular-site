import { NavLink } from './navLink';
import { CategoryCard } from './categoryCard';

export class Category {
    navLinks: NavLink[];
    categoryCards: CategoryCard[];

    constructor(data: any) {
        Object.assign(this, data);
    }
}
