import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { AppRouter } from "./AppRouter";
import { Navbar } from "./Navbar";
import {
  fetchBasket,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../http/deviceAPI";
import {
  setBrands,
  setDevices,
  setIsDeviceLoading,
  setTypes,
} from "../store/reducers/deviceSlice";
import { check } from "../http/userAPI";
import { setIsAuth } from "../store/reducers/userSlice";
// import { BasketModal } from "./modal/BasketModal";

function App() {
  const { darkTheme } = useAppSelector((state) => state.user);
  const { selectedBrand, selectedType } = useAppSelector(
    (state) => state.device
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
    fetchDevices(undefined, undefined).then((data) =>
      dispatch(setDevices(data.rows))
    );
    fetchBasket().then((data) => dispatch);
  }, []);

  useEffect(() => {
    dispatch(setIsDeviceLoading(true));
    fetchDevices(selectedType?.id, selectedBrand?.id).then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setIsDeviceLoading(false));
    });
  }, [selectedBrand, selectedType]);

  useEffect(() => {
    check().then(() => dispatch(setIsAuth(true)));
  }, []);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div className="dark:bg-darkPhone h-[100vh] relative">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
