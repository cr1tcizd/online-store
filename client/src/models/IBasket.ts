import { IDevice } from "./IDevice";

export interface IBasket {
  id: string;
  userId: string;
}

export interface IBasketDevice {
  id: string;
  device: IDevice;
  basketId: string;
}
