export class SocialLink {
    url: string;
    id: string;
    defColor: string;
    defBorderColor: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
