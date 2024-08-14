import { Auth } from "./page/Auth";
import { Basket } from "./page/Basket";
import { Device } from "./page/Device";
import { Shop } from "./page/Shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

interface Routes {
  path: string;
  element: () => JSX.Element;
}

export const authRoutes: Routes[] = [
  {
    path: BASKET_ROUTE,
    element: Basket,
  },
  {
    path: ADMIN_ROUTE,
    element: Basket,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    element: Auth,
  },
  {
    path: SHOP_ROUTE,
    element: Shop,
  },
  {
    path: DEVICE_ROUTE,
    element: Device,
  },
];
