import { configureStore } from "@reduxjs/toolkit";
import cargosSlice from "./reducers/cargosSlice";
import funcionariosReducer from "./reducers/funcionariosSlice";
import paginacaoSlice from "./reducers/paginacaoSlice";

const store = configureStore({
  reducer: {
    funcionarios: funcionariosReducer,
    cargos: cargosSlice,
    paginacao: paginacaoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
