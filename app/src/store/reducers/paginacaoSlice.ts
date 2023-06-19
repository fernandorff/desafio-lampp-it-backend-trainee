import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Paginacao from "../../models/dtos/Paginacao";

const initialState: Paginacao = {
  size: 5,
  page: 0,
  order: "ASC",
  orderBy: "id",
};

const paginacaoSlice = createSlice({
  name: "paginacao",
  initialState,
  reducers: {
    setPaginaAtual: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        page: action.payload,
      };
    },
    setOrdenacaoPor: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        orderBy: action.payload,
      };
    },
    setOrdem: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        order: action.payload,
      };
    },
    setTamanho: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        size: action.payload,
      };
    },
  },
});

export const { setPaginaAtual, setOrdem, setOrdenacaoPor, setTamanho } =
  paginacaoSlice.actions;
export default paginacaoSlice.reducer;
