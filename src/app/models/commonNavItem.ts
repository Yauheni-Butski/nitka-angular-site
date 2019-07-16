export class CommonNavItem {
    text: string;
    routerLinkPath: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
