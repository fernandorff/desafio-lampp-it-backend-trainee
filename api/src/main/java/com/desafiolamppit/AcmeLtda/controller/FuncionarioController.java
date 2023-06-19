package com.desafiolamppit.AcmeLtda.controller;

import com.desafiolamppit.AcmeLtda.controller.dto.FuncionarioDto;
import com.desafiolamppit.AcmeLtda.controller.request.AlterarFuncionarioRequest;
import com.desafiolamppit.AcmeLtda.controller.request.IncluirFuncionarioRequest;
import com.desafiolamppit.AcmeLtda.service.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/funcionarios")
@Tag(name = "Funcionário", description = "API para gerenciamento de funcionários")
@CrossOrigin(origins = "https://desafio-lampp-it-backend-trainee.vercel.app")
public class FuncionarioController {

    @Autowired
    private IncluirFuncionarioService incluirFuncionarioService;

    @Autowired
    private ListarFuncionariosService listarFuncionariosService;

    @Autowired
    private ObterFuncionarioService obterFuncionarioService;

    @Autowired
    private AlterarFuncionarioService alterarFuncionarioService;

    @Autowired
    private RemoverFuncionarioService removerFuncionarioService;

    @PostMapping
    @Operation(summary = "Incluir funcionário", method = "POST")
    @ResponseStatus(HttpStatus.CREATED)
    public FuncionarioDto incluir(@Valid @RequestBody IncluirFuncionarioRequest request) {
        return incluirFuncionarioService.incluir(request);
    }

    @GetMapping
    @Operation(summary = "Listar funcionários", method = "GET")
    @ResponseStatus(HttpStatus.OK)
    public List<FuncionarioDto> listar() {
        return listarFuncionariosService.listar();
    }

    @GetMapping("/paginado")
    @Operation(summary = "Listar funcionários com paginação", method = "GET")
    @ResponseStatus(HttpStatus.OK)
    public Page<FuncionarioDto> listarPaginado(Pageable pageable) {
        return listarFuncionariosService.listarPaginado(pageable);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obter funcionário por ID", method = "GET")
    @ResponseStatus(HttpStatus.OK)
    public FuncionarioDto obter(@PathVariable Long id) {
        return obterFuncionarioService.obter(id);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Alterar funcionário por ID", method = "PUT")
    @ResponseStatus(HttpStatus.OK)
    public FuncionarioDto alterar(@PathVariable Long id,
                                  @Valid @RequestBody AlterarFuncionarioRequest request) {
        return alterarFuncionarioService.alterar(id, request);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Remover funcionário por ID", method = "DELETE")
    @ResponseStatus(HttpStatus.OK)
    public FuncionarioDto remover(@PathVariable Long id) {
        return removerFuncionarioService.remover(id);
    }
}
