import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IType } from "../../models/IType";
import { IBrand } from "../../models/IBrand";
import { IDevice } from "../../models/IDevice";
import { IBasketDevice } from "../../models/IBasket";

export interface DevicesState {
  types: IType[];
  selectedType: IType | null;
  brands: IBrand[];
  selectedBrand: IBrand | null;
  devices: IDevice[];
  basket: IBasketDevice[];
  isDeviceLoading: boolean;
}

const initialState: DevicesState = {
  types: [],
  selectedType: null,
  brands: [],
  selectedBrand: null,
  devices: [],
  basket: [],
  isDeviceLoading: false,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setTypes(state, action: PayloadAction<IType[]>) {
      state.types = action.payload;
    },
    setSelectedType(state, action: PayloadAction<IType | null>) {
      state.selectedType = action.payload;
    },
    setSelectedBrand(state, action: PayloadAction<IBrand | null>) {
      state.selectedBrand = action.payload;
    },
    setBrands(state, action: PayloadAction<IBrand[]>) {
      state.brands = action.payload;
    },
    setDevices(state, action: PayloadAction<IDevice[]>) {
      state.devices = action.payload;
    },
    setIsDeviceLoading(state, action: PayloadAction<boolean>) {
      state.isDeviceLoading = action.payload;
    },
  },
});

export const {
  setTypes,
  setBrands,
  setDevices,
  setSelectedBrand,
  setSelectedType,
  setIsDeviceLoading,
} = deviceSlice.actions;
export default deviceSlice.reducer;
