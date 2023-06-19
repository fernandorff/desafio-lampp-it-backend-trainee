package com.desafiolamppit.AcmeLtda.service;

import com.desafiolamppit.AcmeLtda.controller.dto.FuncionarioDto;
import com.desafiolamppit.AcmeLtda.controller.request.IncluirFuncionarioRequest;
import com.desafiolamppit.AcmeLtda.domain.Funcionario;
import com.desafiolamppit.AcmeLtda.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.desafiolamppit.AcmeLtda.mapper.FuncionarioMapper.toDto;
import static com.desafiolamppit.AcmeLtda.mapper.FuncionarioMapper.toEntity;

@Service
public class IncluirFuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Transactional
    public FuncionarioDto incluir(IncluirFuncionarioRequest request) {

        Funcionario funcionario = toEntity(request);

        funcionarioRepository.save(funcionario);

        return toDto(funcionario);
    }
}
