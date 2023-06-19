package com.desafiolamppit.AcmeLtda;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(servers = {@Server(url = "${server.servlet.context-path}", description = "Default Server URL")})
public class AcmeLtdaApplication {

    public static void main(String[] args) {
        SpringApplication.run(AcmeLtdaApplication.class, args);
    }

}