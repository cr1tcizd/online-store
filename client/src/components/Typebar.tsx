import { useAppSelector } from "../hooks/redux";
import { TypeItem } from "./TypeItem";

export const Typebar = () => {
  const { types } = useAppSelector((state) => state.device);

  return (
    <div className="flex flex-col min-w-[260px] md:min-w-[200px] bg-gray-50 text-[14px] text-gray-800 rounded-[12px] dark:bg-itemsDarkPhone py-[12px]">
      <div>
        <div className="relative px-[32px] py-[12px]">
          <h2 className="font-medium dark:text-white">Категории</h2>
          <span className="absolute top-0 left-0 w-[10px] h-full bg-primary rounded-r-full bg-origin-padding"></span>
        </div>
        <div className="pl-[32px]">
          {types.map((type) => (
            <TypeItem key={type.id} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};
