export interface IImageCard {
    id: number;
    parentId?: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;
    isLeaf: boolean;
}
