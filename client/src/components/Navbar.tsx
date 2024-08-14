import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setIsAuth, setTheme } from "../store/reducers/userSlice";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { BasketModal } from "./modal/BasketModal";
import {useState} from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { darkTheme, isAuth } = useAppSelector((state) => state.user);
  const [modal, setModal] = useState<boolean>(false);

  const themeHandler = () => {
    if (darkTheme) {
      dispatch(setTheme(false));
      localStorage.setItem("theme", "light");
    } else {
      dispatch(setTheme(true));
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="sticky top-0 shadow-md">
      <div className="container flex h-[92px] py-[24px] items-center gap-[24px]">
        <img
          className="cursor-pointer"
          src={assets.logoSvg}
          alt="Logo"
          onClick={() => navigate(SHOP_ROUTE)}
        />
        <input
          className="w-[500px] h-full bg-gray-100 px-[24px] rounded-full dark:bg-itemsDarkPhone dark:text-white"
          type="text"
          placeholder="Поиск.."
        />
        <nav className="flex gap-[24px] ml-auto items-center relative">
          <img
            className="cursor-pointer"
            src={assets.moonPng}
            alt="theme"
            onClick={themeHandler}
          />
          <img className="cursor-pointer" src={assets.cartPng} alt="basket" onClick={() => setModal(true)} />
          <BasketModal modal={modal} setModal={setModal} />
          {isAuth ? (
            <assets.profileSvg
              width="32px"
              height="32px"
              onClick={() => {
                dispatch(setIsAuth(false));
                localStorage.removeItem("token");
              }}
            />
          ) : (
            <button
              className="bg-primary rounded-full px-[16px] py-[6px] text-[14px] font-medium"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Войти
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};
