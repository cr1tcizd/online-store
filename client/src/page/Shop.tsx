import { Brandbar } from "../components/Brandbar";
import { DeviceList } from "../components/DeviceList";
import { Typebar } from "../components/Typebar";
import { useAppSelector } from "../hooks/redux";

export const Shop = () => {
  const { selectedType } = useAppSelector((state) => state.device);

  return (
    <div className="pt-[44px]">
      <div className="container flex items-start">
        <Typebar />
        <div className="flex flex-col pl-[28px]">
          <h2 className="font-semibold text-[28px] dark:text-white">
            {selectedType?.name}
          </h2>
          <Brandbar />
          <DeviceList />
        </div>
      </div>
    </div>
  );
};
