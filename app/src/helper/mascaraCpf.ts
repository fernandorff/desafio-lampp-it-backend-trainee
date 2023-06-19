export default function mascaraCpf(cpf: string): string {
  const cpfDigitos: string = cpf.replace(/\D/g, "");
  const cpfFormatado: string = cpfDigitos.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );

  return cpfFormatado;
}
