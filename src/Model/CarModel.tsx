export interface CarInfo {
    type : CarType
    name : string;
    price : string;
    image? : any;
}

export enum CarType {
    Hatchback,
    Sedan,
    SUV
}