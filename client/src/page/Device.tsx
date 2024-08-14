import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { assets } from "../assets/assets";

export const Device = () => {
  const { devices } = useAppSelector((state) => state.device);
  const params = useParams();

  const id = Number(params.id);

  const device = devices.find((device) => device.id === id);

  return (
    <div className="container">
      <div className="flex mt-[50px] gap-[82px] dark:text-white">
        <img
          className="h-[300px] bg-gray-50 rounded-[8px] dark:bg-itemsDarkPhone"
          src={import.meta.env.VITE_APP_API_URL + device?.img}
          alt={device?.name}
        />
        <div className="flex flex-col">
          <h2 className="font-semibold text-[32px] leading-10 mb-[6px]">
            {device?.name}
          </h2>
          <p className="text-[24px] mb-[6px] text-primary">
            {device?.price.toLocaleString()} ₽
          </p>
          <div className="flex">
            <img className="mr-[6px]" src={assets.starSvg} alt="" />
            <p>{device?.rating}.0</p>
          </div>
          <div className="mt-auto">
            <button className="border-[1px] border-gray-400 px-[48px] py-[17px] rounded-[15px] dark:text-white">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
