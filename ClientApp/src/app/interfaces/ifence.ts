export interface IFence {
    id: number;
    homeOwner: string;
    address: string;
    date: Date;
    builder: string;
    feetOfFence: number;
    heightOfFence: number;
    typeOfFence: string;
    gates: number;
    curb: boolean;
    stain: boolean;
    bOrC: string;
    price: number;
}
