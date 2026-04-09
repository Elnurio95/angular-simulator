export interface  IPlace {
    id: number; 
    img: string; 
    tourName: string; 
    tourSubtitle: string; 
    price: number; 
    rates: {
        rateIcon: string;
        rate: number; 
    }
}