import { IImageCard } from './interfaces/IImageCard'

export class Category implements IImageCard{
    id: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;
    routerLinkUrl: string;

    getFullNameDescription() {
        return this.name + ' [ Description: ' + this.description + ']';
    }

    constructor(data: any) {
        Object.assign(this, data);
    }
}