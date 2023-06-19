import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Funcionario from "../../models/dtos/Funcionario";

const initialState: { content: Funcionario[] } = { content: [] };

const funcionariosSlice = createSlice({
  name: "funcionarios",
  initialState,
  reducers: {
    setFuncionarios: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setFuncionarios } = funcionariosSlice.actions;
export default funcionariosSlice.reducer;
