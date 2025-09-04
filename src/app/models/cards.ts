

export interface IAppartment {
    id: number;
    title: string;
    description: string;
    images: string[];
    datePosted: string;
    priceDetails: IPriceDetails
    type: 'appartment';
}
export interface Rentees {
    id: number;
    name: string;
    image: string;
    description: string;
    datePosted: string;
    type: 'rentee';
}

export interface IPriceDetails {
    rentPrice: number;
    deposit: number;
    utilities: number;
    negotiable: boolean;
}
