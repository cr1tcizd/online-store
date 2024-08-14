import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IType } from "../models/IType";
import { setSelectedType } from "../store/reducers/deviceSlice";

interface Props {
  type: IType;
}

export const TypeItem = ({ type }: Props) => {
  const { selectedType } = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();

  const typeHandler = (type: IType) => {
    dispatch(setSelectedType(type));
    if (selectedType) {
      if (selectedType.id === type.id) {
        dispatch(setSelectedType(null));
      }
    }
  };

  return (
    <div className="relative">
      <div
        key={type.id}
        className={`border-l-[1px] border-l-gray-500 py-[12px] pl-[27px] cursor-pointer ${
          selectedType === type
            ? "text-primary"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => typeHandler(type)}
      >
        {type.name}
      </div>
      <span
        className={
          selectedType === type
            ? "absolute top-[12px] left-0 h-[20px] w-[1px] border-l-[2px] border-l-primary"
            : ""
        }
      ></span>
    </div>
  );
};
