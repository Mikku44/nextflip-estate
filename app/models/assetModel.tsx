export interface AssetModel {
    id?:string;
    title: string;
    description: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    badge?: 'โครงการใหม่' | 'ขายแล้ว' | 'โครงการยอดนิยม' | 'พร้อมวางขาย';
    imageUrl: string;

}

export interface AssetDetailModel {
    id?:string;
    slug: string;
    title: string;
    description: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    badge?: 'โครงการใหม่' | 'ขายแล้ว' | 'โครงการยอดนิยม';
    images: string[];

    type ? : string;

    // basic info
    buildingName? : string;
    floor? : string;
    roomNumber? : string;
    size? : number;
    direction ? : string;

    // cost
    commonFree? : number;
    waterBill? : number;
    parkingFee? : number;
    motorBikeFee? : number;

    //furniture
    furnitures : string[];

    // hightlights
    hightlights : string[];

    // before - after
    beforeImage : string;
    afterImage : string;

    // location & map
    embededMap? : string;
    nearPlaces? : string[];


    // compatible
    compatible ?  : {
      title : string;
      desc : string;
    }[];


    // FAQ

    FAQs? : {
      title ? : string;
      desc ? : string;
    }[];



}


