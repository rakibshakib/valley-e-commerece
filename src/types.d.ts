interface IProductCart {
  id: number;
  name: string;
  product_type?: string;
  price: number;
  discount: number;
  unit_price: number;
  purchase_price: number;
  rating: {
    average: string;
    product_id: string;
  }[];
  images: string[];
  flash_deal_products: any[];
}