export interface IDeviceRows {
  count: number;
  rows: IDevice[];
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  typeId: number;
  brandId: number;
}
