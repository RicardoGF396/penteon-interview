export interface IFunFactPayload {
    current_page: number;
    last_page: number;
    data: IFunFactCat[];
}

export interface IFunFactCat {
    fact: string;
    length: number;
}
