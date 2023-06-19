import {
  IconArrowAutofitHeight,
  IconSortAscending,
  IconSortDescending,
} from "@tabler/icons-react";
import { Label, Pagination, Radio, Select } from "flowbite-react";
import { useEffect } from "react";
import { ArrowDownUp } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import useFuncionarioApi from "../api/useFuncionarioApi";
import { RootState } from "../store";
import { setFuncionarios } from "../store/reducers/funcionariosSlice";
import {
  setOrdem,
  setOrdenacaoPor,
  setPaginaAtual,
  setTamanho,
} from "../store/reducers/paginacaoSlice";

export default function PaginacaoTabela() {
  const dispatch = useDispatch();
  const { listarFuncionariosPaginado } = useFuncionarioApi();
  const paginacao = useSelector((state: RootState) => state.paginacao);
  const funcionarios: any = useSelector(
    (state: RootState) => state.funcionarios
  );

  async function handlePageChange(page: number) {
    dispatch(setPaginaAtual(page - 1));
  }

  useEffect(() => {
    async function fetchFuncionarios() {
      dispatch(setFuncionarios(await listarFuncionariosPaginado()));
    }
    fetchFuncionarios();
  }, [paginacao]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <Select
          className="mt-2"
          id="cargo"
          required
          name="cargo"
          sizing={"sm"}
          onChange={(event) => dispatch(setOrdenacaoPor(event.target.value))}
          icon={() => <ArrowDownUp className="dark:text-white" />}
        >
          <option value={"id"}>ID</option>
          <option value={"nome"}>Nome</option>
          <option value={"cargo"}>Cargo</option>
          <option value={"salario"}>Salário</option>
        </Select>

        <fieldset
          className="mr-8 mt-2 flex max-w-md gap-3"
          id="radio"
          onChange={(event: any) => dispatch(setOrdem(event.target.value))}
        >
          <div className="flex items-center gap-2">
            <Radio defaultChecked id="ASC" name="order" value="ASC" />
            <Label htmlFor="ASC">
              <IconSortAscending
                strokeWidth={"1"}
                className="dark:text-white"
              />
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="DESC" name="order" value="DESC" />
            <Label htmlFor="DESC">
              <IconSortDescending
                strokeWidth={"1"}
                className="dark:text-white"
              />
            </Label>
          </div>
        </fieldset>

        <Select
          className="mt-2"
          id="cargo"
          required
          name="cargo"
          sizing={"sm"}
          onChange={(event) => {
            dispatch(setTamanho(parseInt(event.target.value)));
            dispatch(setPaginaAtual(0));
          }}
          icon={() => (
            <IconArrowAutofitHeight
              strokeWidth={"1"}
              className="dark:text-white"
            />
          )}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <Pagination
          currentPage={funcionarios.number + 1 || 1}
          onPageChange={handlePageChange}
          showIcons
          totalPages={
            Math.ceil(funcionarios.totalElements / funcionarios.size) || 1
          }
          layout="pagination"
          className="items-center"
          nextLabel=""
          previousLabel=""
        />
        <div className="mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">
          Mostrando
          <span className="mx-1 font-semibold text-gray-900 dark:text-white">
            {funcionarios.number * funcionarios.size + 1 || ""} -{" "}
            {funcionarios.numberOfElements +
              funcionarios.number * funcionarios.size || ""}
          </span>
          de
          <span className="mx-1 font-semibold text-gray-900 dark:text-white">
            {funcionarios.totalElements || ""}
          </span>
        </div>
      </div>
    </div>
  );
}
