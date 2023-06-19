package com.desafiolamppit.AcmeLtda.mapper;

import com.desafiolamppit.AcmeLtda.controller.dto.FuncionarioDto;
import com.desafiolamppit.AcmeLtda.controller.request.IncluirFuncionarioRequest;
import com.desafiolamppit.AcmeLtda.domain.Funcionario;

import static java.util.Objects.isNull;

public class FuncionarioMapper {

    public static Funcionario toEntity(IncluirFuncionarioRequest request) {
        Funcionario entity = new Funcionario();
        entity.setNome(request.getNome());
        entity.setCpf(request.getCpf());
        entity.setCargo(request.getCargo());
        entity.setSalario(request.getSalario());
        return entity;
    }

    public static FuncionarioDto toDto(Funcionario entity) {
        if (isNull(entity)) {
            return FuncionarioDto.builder().build();
        }

        FuncionarioDto dto = new FuncionarioDto();
        dto.setId(entity.getId());
        dto.setNome(entity.getNome());
        dto.setCpf(entity.getCpf());
        dto.setCargo(entity.getCargo());
        dto.setCargoString(entity.getCargo().getValue());
        dto.setSalario(entity.getSalario());

        return dto;
    }
}
