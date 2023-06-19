import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useCargoApi from "../api/useCargoApi";
import useFuncionarioApi from "../api/useFuncionarioApi";
import TabelaDeFuncionarios from "../components/TabelaDeFuncionarios";
import Cargo from "../models/dtos/Cargo";
import { setCargos } from "../store/reducers/cargosSlice";
import { setFuncionarios } from "../store/reducers/funcionariosSlice";

export default function Desafio() {
  const { listarCargos } = useCargoApi();
  const { listarFuncionarios, listarFuncionariosPaginado } =
    useFuncionarioApi();

  const dispatch = useDispatch();

  async function fetchFuncionarios() {
    const funcionarios = await listarFuncionariosPaginado();
    dispatch(setFuncionarios(funcionarios));
  }

  async function fetchCargos() {
    const cargos = await listarCargos();
    dispatch(setCargos(cargos));
  }

  useEffect(() => {
    fetchFuncionarios();
    fetchCargos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      const cargos: Cargo[] = await listarCargos();
      setCargos(cargos);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TabelaDeFuncionarios />;
}
