import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setSelectedBrand } from "../store/reducers/deviceSlice";
import { BrandItem } from "./BrandItem";

export const Brandbar = () => {
  const { brands, selectedBrand } = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();

  return (
    <div className="flex py-[28px] gap-[28px]">
      <button
        className={`px-[12px] py-[6px] rounded-full ${
          selectedBrand === null
            ? "bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800"
            : "bg-gray-100 text-gray-600 dark:bg-black-04 dark:text-gray-500"
        }`}
        onClick={() => dispatch(setSelectedBrand(null))}
      >
        All
      </button>
      {brands.map((brand) => (
        <BrandItem key={brand.id} brand={brand} />
      ))}
    </div>
  );
};
