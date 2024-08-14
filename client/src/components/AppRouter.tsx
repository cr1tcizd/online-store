import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { authRoutes, publicRoutes } from "../routes";
import { DEVICE_ROUTE, SHOP_ROUTE } from "../utils/consts";

export const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <Routes>
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
      {isAuth &&
        authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={
            route.path === DEVICE_ROUTE ? route.path + "/" + ":id" : route.path
          }
          element={<route.element />}
        />
      ))}
    </Routes>
  );
};
