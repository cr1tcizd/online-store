import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppSelector } from "../hooks/redux";
import { IDevice } from "../models/IDevice";
import { DEVICE_ROUTE } from "../utils/consts";

interface DeviceItemProps {
  device: IDevice;
}

export const DeviceItem = ({ device }: DeviceItemProps) => {
  const { brands } = useAppSelector((state) => state.device);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-between cursor-pointer group"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <div>
        <img
          className="bg-gray-50 dark:bg-itemsDarkPhone mb-[16px] rounded-[8px] group-hover:bg-gray-100"
          src={import.meta.env.VITE_APP_API_URL + device.img}
          alt={device.name}
        />
        <p className="font-semibold text-gray-800 dark:text-white line-clamp-1">
          {device.name}
        </p>
        <p className="text-gray-600 dark:text-gray-500 font-normal">
          {brands.find((brand) => brand.id === device.brandId)?.name}
        </p>
      </div>

      <div className="relative mt-[10px]">
        <p className="text-primary font-semibold">
          {device.price.toLocaleString()} ₽
        </p>
        <div className="flex">
          <img className="mr-[6px]" src={assets.starSvg} alt="" />
          <p className="text-gray-600 text-[12px]">{device.rating}.0</p>
        </div>
        <button className="absolute bottom-0 right-0 p-[10px] bg-gray-100 dark:bg-itemsDarkPhone rounded-full">
          <assets.cartAddSvg className="fill-gray-500 dark:fill-white" />
        </button>
      </div>
    </div>
  );
};
