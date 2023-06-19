package com.desafiolamppit.AcmeLtda.repository;

import com.desafiolamppit.AcmeLtda.domain.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
}
