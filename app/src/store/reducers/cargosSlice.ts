import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cargo from "../../models/dtos/Cargo";

const initialState: Cargo[] = [];

const cargosSlice = createSlice({
  name: "cargos",
  initialState,
  reducers: {
    setCargos: (state, action: PayloadAction<Cargo[]>) => {
      return action.payload;
    },
  },
});

export const { setCargos } = cargosSlice.actions;
export default cargosSlice.reducer;
