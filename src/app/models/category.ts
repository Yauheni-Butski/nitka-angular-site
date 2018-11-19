export class Category{
    id: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;

    getFullNameDescription() {
        return this.name + ' [ Description: ' + this.description + ']';
    }

    constructor(data: any) {
        Object.assign(this, data);
    }
}