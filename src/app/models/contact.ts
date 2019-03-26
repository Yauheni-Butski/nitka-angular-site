export class Contact{
    name: string;
    city: string;
    phoneNumber: string;
    email: string;
    comment: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}