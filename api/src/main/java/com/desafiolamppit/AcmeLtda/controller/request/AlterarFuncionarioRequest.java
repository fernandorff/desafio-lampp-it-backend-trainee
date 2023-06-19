package com.desafiolamppit.AcmeLtda.controller.request;

import com.desafiolamppit.AcmeLtda.domain.enums.Cargo;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class AlterarFuncionarioRequest {

    @NotBlank(message = "O campo nome não pode estar vazio.")
    private String nome;

    @NotBlank(message = "O campo CPF não pode estar vazio.")
    @Pattern(regexp = "\\d{11}", message = "CPF inválido.")
    private String cpf;

    @NotNull(message = "O campo cargo não pode estar vazio.")
    private Cargo cargo;

    @NotNull(message = "O campo salário não pode estar vazio.")
    private BigDecimal salario;
}
