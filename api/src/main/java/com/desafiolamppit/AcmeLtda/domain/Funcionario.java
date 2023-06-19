package com.desafiolamppit.AcmeLtda.domain;

import com.desafiolamppit.AcmeLtda.controller.request.AlterarFuncionarioRequest;
import com.desafiolamppit.AcmeLtda.domain.enums.Cargo;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Getter
@Setter
@ToString(of = "id")
@EqualsAndHashCode(of = "id")
@Entity
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nome;

    private String cpf;

    @Enumerated(EnumType.STRING)
    private Cargo cargo;

    private BigDecimal salario;

    public void alterar(AlterarFuncionarioRequest request) {
        this.nome = request.getNome();
        this.cpf = request.getCpf();
        this.cargo = request.getCargo();
        this.salario = request.getSalario();
    }
}