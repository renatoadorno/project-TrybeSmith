interface IProduct {
  id: number;
  name: string;
  amount: string;
}

interface IAllProducts extends IProduct {
  orderId: number;
}

export type { IProduct, IAllProducts };
