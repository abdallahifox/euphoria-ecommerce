export type ProductType = {
    id: number,
    title: string
    brand:string
    category: string
    image: string
    description: string
    rate: number,
    comments: object[],
    sizes: string[]
    colors: string[]
    price: number,
    galleryImage:string[]
  }


  export type cartItemType = {
    id?: number;
    image?: string;
    price?: number;
    color?: string;
    size?: string;
    brand?: string;
    title?: string;
    qty: number;
  };


  export type favoriteType = {
    id: string;
    image?: string;
    price?: string;
    brand?: string;
    title?: string;
  };


 export type singleBoxPropsTypes = {
    explore: boolean;
    icon: boolean;
    imgURL: string;
    title: string;
    price?: string;
    heart?: boolean;
    brand?: string;
    id:number
  }