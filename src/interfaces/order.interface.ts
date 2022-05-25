interface IOrder {
  id: number;
  userId: number;
}

interface ICreateOrder {
  userId: number;
  productsIds: number[];
}

interface GetOrder extends IOrder {
  productsIds: number[];
}

export type { IOrder, GetOrder, ICreateOrder };
