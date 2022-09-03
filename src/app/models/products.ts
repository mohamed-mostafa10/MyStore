export class Products {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    qty:number;

    constructor(
     qty = 1
    )
    {
        this.qty = qty;
    }
}


   
  