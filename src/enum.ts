export enum CustomerType {
    REGULAR = 'REGULAR',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM',
}

export type Customer = {
    id: string | number;
    name: string;
    type: CustomerType;
}