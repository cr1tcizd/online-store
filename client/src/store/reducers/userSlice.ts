import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

export interface UserState {
  user: IUser;
  isAuth: boolean;
  darkTheme: boolean;
}

const initialState: UserState = {
  isAuth: false,
  darkTheme: false,
  user: { id: 1, email: "sdfjsdaf", role: "ADMIN" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<boolean>) {
      state.darkTheme = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    // usersFetching(state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = true;
    //   state.error = "";
    //   state.users = action.payload;
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { setTheme, setIsAuth, setUser } = userSlice.actions;
export default userSlice.reducer;
