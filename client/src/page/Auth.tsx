import { useState } from "react";
import { login, registration } from "../http/userAPI";
import { useAppDispatch } from "../hooks/redux";
import { setIsAuth, setUser } from "../store/reducers/userSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loginPath = location.pathname === "/login";

  const signIn = async () => {
    let data;
    try {
      loginPath
        ? (data = await login(email, password))
        : (data = await registration(email, password));
      dispatch(setIsAuth(true));
      dispatch(setUser(data));
      navigate(SHOP_ROUTE);
    } catch (e: any) {
      console.log(e.response.data.message);
      setErrorMessage(e.response.data.message);
    }
  };

  return (
    <div className="container flex items-center justify-center h-[80%]">
      <div className="flex flex-col w-[450px] items-center px-[40px] py-[80px] rounded-[24px]">
        <h2 className="text-[32px] text-[#333] font-medium place-self-start mb-[32px] dark:text-white">
          {loginPath ? "Авторизация" : "Регистрация"}
        </h2>
        <form className="flex flex-col gap-[32px] w-full" action="">
          <label>
            <p className="text-[16px] text-[#666] dark:text-gray-300 mb-[4px]">
              Email
            </p>
            <input
              className="border-[1px] py-[6px] border-gray-300 dark:text-white dark:bg-itemsDarkPhone w-full h-[56px] rounded-[12px] px-[12px] outline-none"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p className="text-[16px] text-[#666] dark:text-gray-300 mb-[4px]">
              Пароль
            </p>
            <input
              className="border-[1px] py-[6px] border-gray-300 dark:text-white dark:bg-itemsDarkPhone w-full h-[56px] rounded-[12px] px-[12px] outline-none"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            className="bg-[#111] text-white font-medium rounded-[32px] h-[56px] py-[6px] dark:bg-gray-200 dark:text-[#333]"
            onClick={signIn}
            type="button"
          >
            {loginPath ? "Авторизоваться" : "Зарегистрироваться"}
          </button>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <div className="text-[#333] font-normal dark:text-white">
            {loginPath ? (
              <div>
                Нету аккаунта?{" "}
                <NavLink
                  to={REGISTRATION_ROUTE}
                  className="font-semibold underline"
                  onClick={() => setErrorMessage("")}
                >
                  Зарегистрироваться
                </NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?{" "}
                <NavLink
                  to={LOGIN_ROUTE}
                  className="font-semibold underline"
                  onClick={() => setErrorMessage("")}
                >
                  Авторизоваться
                </NavLink>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
