export class PricePackage {
    price: number;
    currencySymbol: string;
    name: string;
    description: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
