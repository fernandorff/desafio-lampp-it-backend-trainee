import { Table } from "flowbite-react";
import { useSelector } from "react-redux";
import mascaraCpf from "../helper/mascaraCpf";
import Funcionario from "../models/dtos/Funcionario";
import { RootState } from "../store";
import CreateUserModal from "./CreateUserModal";
import DropdownActionsButton from "./DropdownActionsButton";
import PaginacaoTabela from "./PaginacaoTabela";

export default function TabelaDeFuncionarios() {
  const funcionarios = useSelector((state: RootState) => state.funcionarios);

  return (
    <>
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-2xl lg:text-2xl">
          Lista de Funcionários
        </h1>

        <CreateUserModal />
      </div>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Nome</Table.HeadCell>
          <Table.HeadCell>CPF</Table.HeadCell>
          <Table.HeadCell>Cargo</Table.HeadCell>
          <Table.HeadCell>Salario</Table.HeadCell>
          <Table.HeadCell>Ações</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {funcionarios.content.length > 0 &&
            funcionarios.content.map((funcionario: Funcionario, index) => (
              <Table.Row
                key={funcionario.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{funcionario.id}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {funcionario.nome}
                </Table.Cell>
                <Table.Cell>{mascaraCpf(funcionario.cpf)}</Table.Cell>
                <Table.Cell>{funcionario.cargoString}</Table.Cell>
                <Table.Cell>R$ {funcionario.salario}</Table.Cell>
                <Table.Cell>
                  <DropdownActionsButton funcionario={funcionario} />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      <PaginacaoTabela />
    </>
  );
}
