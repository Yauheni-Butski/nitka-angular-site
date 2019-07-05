import { NavLink } from './navLink';
import { ImagePlate } from './imagePlate';

export class Section {
    navLinks: NavLink[];
    imagePlates: ImagePlate[];

    constructor(data: any) {
        Object.assign(this, data);
    }
}
