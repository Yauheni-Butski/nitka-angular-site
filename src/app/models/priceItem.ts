import { PricePackage } from './pricePackage';

export class PriceItem {
    price: number;
    currencySymbol: string;
    name: string;
    description: string;
    packages: PricePackage[];

    constructor(data: any) {
        Object.assign(this, data);
    }
}
