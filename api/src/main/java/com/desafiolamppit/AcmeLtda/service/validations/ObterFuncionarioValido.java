package com.desafiolamppit.AcmeLtda.service.validations;

import com.desafiolamppit.AcmeLtda.domain.Funcionario;
import com.desafiolamppit.AcmeLtda.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ObterFuncionarioValido {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public Funcionario porId(Long id) {

        return funcionarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Funcionário não encontrado"));
    }
}
