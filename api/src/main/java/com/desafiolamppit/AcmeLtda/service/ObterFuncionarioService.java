package com.desafiolamppit.AcmeLtda.service;

import com.desafiolamppit.AcmeLtda.controller.dto.FuncionarioDto;
import com.desafiolamppit.AcmeLtda.domain.Funcionario;
import com.desafiolamppit.AcmeLtda.service.validations.ObterFuncionarioValido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.desafiolamppit.AcmeLtda.mapper.FuncionarioMapper.toDto;

@Service
public class ObterFuncionarioService {

    @Autowired
    private ObterFuncionarioValido obterFuncionarioValido;

    public FuncionarioDto obter(Long id) {

        Funcionario funcionario = obterFuncionarioValido.porId(id);

        return toDto(funcionario);
    }
}
