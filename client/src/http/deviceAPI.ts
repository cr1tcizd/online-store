// import { InternalAxiosRequestConfig } from "axios";
import { $authHost, $host } from ".";
import { IBrand } from "../models/IBrand";
import { IDeviceRows } from "../models/IDevice";
import { IType } from "../models/IType";

// export const createType = async (type: InternalAxiosRequestConfig) => {
//   const { data> } = await $authHost.post("api/type", type);
//   return data;
// };
export const fetchTypes = async () => {
  const { data } = await $host.get<IType[]>("api/type");
  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get<IBrand[]>("api/brand");
  return data;
};
export const fetchDevices = async (
  typeId: number | undefined,
  brandId: number | undefined
) => {
  const { data } = await $host.get<IDeviceRows>("api/device", {
    params: {
      typeId,
      brandId,
    },
  });
  return data;
};

export const fetchBasket = async (id: string) => {
  const { data } = await $authHost.get("api/basket/" + id);
  return data;
};

// export const addBasketDevice = async () => {
//   const { data } = await $authHost.post("api/basket/");
// };
