import { useSelector } from "react-redux";
import AlterarFuncionarioRequest from "../models/requests/AlterarFuncionarioRequest";
import { RootState } from "../store";
import IncluirFuncionarioRequest from "./../models/requests/IncluirFuncionarioRequest";
import axiosInstance from "./_axiosInstance";

export default function useFuncionarioApi() {
  const path = "/funcionarios";

  const paginacao = useSelector((state: RootState) => state.paginacao);

  // GET methods
  async function listarFuncionarios() {
    try {
      const response = await axiosInstance.get(`${path}`);
      return response.data;
    } catch (error) {}
  }

  async function listarFuncionariosPaginado() {
    try {
      const response = await axiosInstance.get(
        `${path}/paginado?page=${paginacao.page}&size=${paginacao.size}&sort=${paginacao.orderBy},${paginacao.order}`
      );
      return response.data;
    } catch (error) {}
  }

  async function obterFuncionarioPorId({ id }: { id: number }) {
    try {
      const response = await axiosInstance.get(`${path}/${id}`);
      return response.data;
    } catch (error) {}
  }

  // POST methods
  async function incluirFuncionario({
    request,
  }: {
    request: IncluirFuncionarioRequest;
  }) {
    try {
      const response = await axiosInstance.post(`${path}`, request);
      return response.data;
    } catch (error) {}
  }

  // PUT methods
  async function alterarFuncionario({
    id,
    request,
  }: {
    id: number;
    request: AlterarFuncionarioRequest;
  }) {
    try {
      const response = await axiosInstance.put(`${path}/${id}`, request);
      return response.data;
    } catch (error) {}
  }

  // DELETE methods
  async function removerFuncionario({ id }: { id: number }) {
    try {
      const response = await axiosInstance.delete(`${path}/${id}`);
      return response;
    } catch (error) {}
  }

  return {
    // GET methods
    listarFuncionarios,
    obterFuncionarioPorId,
    listarFuncionariosPaginado,
    // POST methods
    incluirFuncionario,
    // PUT methods
    alterarFuncionario,
    // DELETE methods
    removerFuncionario,
  };
}
