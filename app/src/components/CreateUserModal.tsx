import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import useFuncionarioApi from "../api/useFuncionarioApi";
import mascaraCpf from "../helper/mascaraCpf";
import Cargo from "../models/dtos/Cargo";
import IncluirFuncionarioRequest from "../models/requests/IncluirFuncionarioRequest";
import { RootState } from "../store";
import { setFuncionarios } from "../store/reducers/funcionariosSlice";

const emptyFormInput: IncluirFuncionarioRequest = {
  nome: "",
  cpf: "",
  cargo: "",
  salario: 0,
};

export default function CreateUserModal() {
  const dispatch = useDispatch();
  const cargos = useSelector((state: RootState) => state.cargos);
  const { incluirFuncionario, listarFuncionariosPaginado } =
    useFuncionarioApi();
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [formInput, setFormInput] = useState(emptyFormInput);

  async function handleSubmit() {
    const response = await incluirFuncionario({
      request: formInput,
    });

    if (response) {
      setOpenModal(undefined);
      const funcionarios = await listarFuncionariosPaginado();
      dispatch(setFuncionarios(funcionarios));
      setFormInput(emptyFormInput);
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
      <Button
        color={"success"}
        size={"sm"}
        onClick={() => props.setOpenModal("form-elements")}
      >
        <HiOutlineUserAdd className="mr-2 h-5 w-5" />
        Novo Funcionário
      </Button>

      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup={false}
        onClose={() => {
          props.setOpenModal(undefined);
          setFormInput(emptyFormInput);
        }}
        root={document.body}
      >
        <Modal.Header className="items-center bg-slate-50 text-xl font-medium text-gray-900 dark:bg-slate-800 dark:text-white">
          Cadastro de Funcionário
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
                Cadastrar Funcionário
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
