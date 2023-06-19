package com.desafiolamppit.AcmeLtda.controller;

import com.desafiolamppit.AcmeLtda.service.VerificarOrdemAlfabeticaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ordem-alfabetica")
@Tag(name = "Ordem Alfabetica", description = "API para verificar ordem alfabetica de uma lista de palavras")
public class OrdemAlfabeticaController {

    @Autowired
    private VerificarOrdemAlfabeticaService verificarOrdemAlfabeticaService;

    @GetMapping
    @Operation(summary = "Verificar ordem alfabética", method = "GET")
    @ResponseStatus(HttpStatus.OK)
    public boolean verificarOrdemAlfabetica(String[] request) {
        return verificarOrdemAlfabeticaService.verificarOrdemAlfabetica(request);
    }
}
