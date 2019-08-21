import { IImageCard } from './interfaces/IImageCard';

export class CategoryCard implements IImageCard {
    id: number;
    parentId?: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;
    isLeaf: boolean;

    getFullNameDescription() {
        return `${this.name} [ Description: ${this.description} ]`;
    }
}
