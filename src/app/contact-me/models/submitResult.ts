export class SubmitResult {
    success: boolean;
    message: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
