export interface AssetModel {
    id?:string;
    title: string;
    description: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    badge?: 'โครงการใหม่' | 'ขายแล้ว' | 'โครงการยอดนิยม';
    imageUrl: string;

}