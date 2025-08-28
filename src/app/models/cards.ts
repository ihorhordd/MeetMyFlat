

export interface IAppartment {
    id: number;
    title: string;
    description: string;
    images: string[];
    datePosted: string;
    priceDetails: IPriceDetails
}

export interface IPriceDetails {
    rentPrice: number;
    deposit: number;
    utilities: number;
    negotiable: boolean;
}
