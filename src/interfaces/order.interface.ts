interface IOrder {
  id: number;
  userId: number;
}

interface GetOrder extends IOrder {
  productsIds: number[];
}

export type { IOrder, GetOrder };
