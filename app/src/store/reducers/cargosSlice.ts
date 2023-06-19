import Cargo from "../../models/dtos/Cargo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
