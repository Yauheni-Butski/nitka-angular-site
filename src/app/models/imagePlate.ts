export class ImagePlate{
    id: number;
    thumbPath: string;
    imagePath: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}