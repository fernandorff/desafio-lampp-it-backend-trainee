package com.desafiolamppit.AcmeLtda.controller;

import com.desafiolamppit.AcmeLtda.controller.dto.CargoDto;
import com.desafiolamppit.AcmeLtda.service.ListarCargosService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cargos")
@Tag(name = "Cargo", description = "API para visualização de cargos (enum)")
public class CargoController {

    @Autowired
    private ListarCargosService listarCargosService;

    @GetMapping
    @Operation(summary = "Listar cargos (enum)", method = "GET")
    @ResponseStatus(HttpStatus.OK)
    public List<CargoDto> listar() {
        return listarCargosService.listar();
    }
}
