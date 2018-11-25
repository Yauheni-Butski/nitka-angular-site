export class NavLink{
    title: string;
    routeName: string;
    order: number;

    constructor(data: any) {
        Object.assign(this, data);
    }
}