import { IImageCard } from './interfaces/IImageCard'

export class Section implements IImageCard {
    id: number;
    parentId?: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;
    routerLinkUrl: string;
    isLeaf: boolean;

    constructor(data: any) {
        Object.assign(this, data);
    }
}