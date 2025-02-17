import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";
import { IUser } from "../models/IUser";

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode<IUser>(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode<IUser>(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode<IUser>(data.token);
};
