export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nik: string;
    readonly npwp: string;
}