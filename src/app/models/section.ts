export class Section{
    id: number;
    name: string;
    order: number;
    description: string;
    coverImagePath: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}