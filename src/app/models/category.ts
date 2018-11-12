export class Category{
    id: number;
    parentId?: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;

    getFullNameDescription() {
        return this.name + ' ' + this.description;
    }

    constructor(data: any) {
        Object.assign(this, data);
    }
}