import { IImageCard } from './interfaces/IImageCard'

export class Section implements IImageCard {
    id: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;
    routerLinkUrl: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}