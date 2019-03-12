export class ImagePlate{
    id: number;
    thumbPath: string;
    imagePath: string;
    likeCount: number;
    isUserLike: boolean;

    constructor(data: any) {
        Object.assign(this, data);
    }
}