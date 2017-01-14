export interface Coffee {
    Id: number;
    CoffeeType: number;
    Cost: number;
    Name: string;
    Notes: string;
    Region: string;
    Acidity: string;
    Body: string;
    Elevation: string;
    Processing: string;
    Varietal: string;
    Decaf: boolean;
    SignOff: boolean;
}

export interface Workflows {
    Id: number;
    BP: string;
    FriendlyName: string;
    Description: string;
    Priority: number;
    RequestedBy: string;
}

export interface BeverageChoices {
    title: string;
}

export interface SignOff {
    CoffeeId: number;
    SignOff: boolean;
    Comments: string;
    Recommend: boolean;
}