import {
  Button,
  Dropdown,
  Label,
  Modal,
  Select,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { HiDotsVertical, HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import useFuncionarioApi from "../api/useFuncionarioApi";
import mascaraCpf from "../helper/mascaraCpf";
import Cargo from "../models/dtos/Cargo";
import Funcionario from "../models/dtos/Funcionario";
import AlterarFuncionarioRequest from "../models/requests/AlterarFuncionarioRequest";
import { RootState } from "../store";
import { setFuncionarios } from "../store/reducers/funcionariosSlice";

interface Props {
  funcionario: Funcionario;
}

export default function DropdownActionsButton({ funcionario }: Props) {
  const dispatch = useDispatch();
  const cargos = useSelector((state: RootState) => state.cargos);
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const defaultFormInput = {
    nome: funcionario.nome,
    cpf: funcionario.cpf,
    cargo: funcionario.cargo,
    salario: funcionario.salario,
  };

  const [formInput, setFormInput] =
    useState<AlterarFuncionarioRequest>(defaultFormInput);

  const { listarFuncionariosPaginado, alterarFuncionario, removerFuncionario } =
    useFuncionarioApi();

  async function handleSubmit() {
    const response = await alterarFuncionario({
      id: funcionario.id,
      request: formInput,
    });

    if (response) {
      setOpenModal(undefined);
      const funcionarios = await listarFuncionariosPaginado();
      dispatch(setFuncionarios(funcionarios));
    }
  }

  async function handleRemove() {
    const response = await removerFuncionario({
      id: funcionario.id,
    });

    if (response) {
      setOpenModal(undefined);
      const funcionarios = await listarFuncionariosPaginado();
      dispatch(setFuncionarios(funcionarios));
    }
  }

  function handleFormchange(event: any) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      [name]: value,
    }));
  }

  return (
    <div>
      <Dropdown
        arrowIcon={false}
        label={<HiDotsVertical className="mr-2 h-5 w-5" />}
        inline
        dismissOnClick
      >
        <Dropdown.Item
          onClick={() => {
            props.setOpenModal("edit-user");
          }}
        >
          Alterar
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            props.setOpenModal("remove-user");
          }}
          className="text-red-700 dark:text-red-500"
        >
          Remover
        </Dropdown.Item>
      </Dropdown>
      <Modal
        show={props.openModal === "edit-user"}
        size="md"
        popup={false}
        onClose={() => {
          props.setOpenModal("");
          setFormInput(defaultFormInput);
        }}
        root={document.body}
      >
        <Modal.Header className="items-center bg-slate-50 text-xl font-medium text-gray-900 dark:bg-slate-800 dark:text-white">
          Alterando Funcionário de ID: {funcionario.id}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nome" value="Nome" />
              </div>
              <TextInput
                id="nome"
                placeholder=""
                name="nome"
                required
                onChange={handleFormchange}
                value={formInput.nome}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cpf" value="CPF" />
              </div>
              <TextInput
                id="cpf"
                placeholder=""
                name="cpf"
                required
                onChange={handleFormchange}
                value={mascaraCpf(formInput.cpf)}
                maxLength={14}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cargo" value="Cargo" />
              </div>
              <Select
                id="cargo"
                required
                name="cargo"
                onChange={handleFormchange}
                value={formInput.cargo}
              >
                <option></option>
                {cargos.length > 0 &&
                  cargos.map((cargo: Cargo) => (
                    <option key={cargo.key} value={cargo.key}>
                      {cargo.value}
                    </option>
                  ))}
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="salario" value="Salário" />
              </div>
              <TextInput
                id="salario"
                placeholder=""
                type="number"
                required
                name="salario"
                onChange={handleFormchange}
                value={formInput.salario}
              />
            </div>

            <div className="flex justify-end">
              <Button color={"success"} onClick={handleSubmit}>
                Alterar Funcionário
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={props.openModal === "remove-user"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
        dismissible
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Tem certeza que deseja remover esse funcionário?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleRemove}>
                Sim, tenho certeza
              </Button>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                Não, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
