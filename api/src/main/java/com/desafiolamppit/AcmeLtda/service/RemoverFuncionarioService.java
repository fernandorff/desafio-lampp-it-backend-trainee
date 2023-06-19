package com.desafiolamppit.AcmeLtda.service;

import com.desafiolamppit.AcmeLtda.controller.dto.FuncionarioDto;
import com.desafiolamppit.AcmeLtda.domain.Funcionario;
import com.desafiolamppit.AcmeLtda.repository.FuncionarioRepository;
import com.desafiolamppit.AcmeLtda.service.validations.ObterFuncionarioValido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.desafiolamppit.AcmeLtda.mapper.FuncionarioMapper.toDto;

@Service
public class RemoverFuncionarioService {

    @Autowired
    private ObterFuncionarioValido obterFuncionarioValido;

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public FuncionarioDto remover(Long id) {

        Funcionario funcionario = obterFuncionarioValido.porId(id);

        funcionarioRepository.deleteById(id);

        return toDto(funcionario);
    }
}
