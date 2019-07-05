export class LoginResult {
    success: boolean;
    userToken: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
