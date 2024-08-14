import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IBrand } from "../models/IBrand";
import { setSelectedBrand } from "../store/reducers/deviceSlice";

interface Props {
  brand: IBrand;
}

export const BrandItem = ({ brand }: Props) => {
  const { selectedBrand } = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();
  const brandHandler = (brand: IBrand) => {
    dispatch(setSelectedBrand(brand));
  };

  return (
    <button
      className={`px-[12px] py-[6px] rounded-full ${
        selectedBrand === brand
          ? "bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800"
          : "bg-gray-100 text-gray-600 dark:bg-black-04 dark:text-gray-500"
      }`}
      onClick={() => brandHandler(brand)}
    >
      {brand.name}
    </button>
  );
};
