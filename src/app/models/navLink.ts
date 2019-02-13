export class NavLink{
    title: string;
    relativeUrl: string;
    order: number;

    constructor(data: any) {
        Object.assign(this, data);
    }
}