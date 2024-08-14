import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";

interface BasketModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BasketModal = ({ modal, setModal }: BasketModalProps) => {
  const ref = useRef(null);

  const handleClickOutside = () => {
    setModal(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <>
      <div
        className={`absolute flex top-[40px] right-0 bg-gray-300 w-[400px] z-20 p-[6px] rounded-xl min-h-[100px] ${modal ? "visible" : "hidden"}`}
        ref={ref}
      >
        <div className="m-auto text-2xl font-semibold">Коризна пуста</div>
      </div>
      {/* <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-30 z-10"
        onClick={(e) => e.preventDefault()}
      ></div> */}
    </>
  );
};
