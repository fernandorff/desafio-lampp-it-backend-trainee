package com.desafiolamppit.AcmeLtda.controller;

import com.desafiolamppit.AcmeLtda.controller.dto.CargoDto;
import com.desafiolamppit.AcmeLtda.service.ListarCargosService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cargos")
@Tag(name = "Cargo", description = "API para visualização de cargos (enum)")
@CrossOrigin(origins = "*")
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
