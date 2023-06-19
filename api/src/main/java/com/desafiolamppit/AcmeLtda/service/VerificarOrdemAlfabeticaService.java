package com.desafiolamppit.AcmeLtda.service;

import org.springframework.stereotype.Service;

@Service
public class VerificarOrdemAlfabeticaService {

    public boolean verificarOrdemAlfabetica(String[] request) {

        String[] listaDePalavras = request;

        if (listaDePalavras == null || listaDePalavras.length <= 1) {
            return true;
        }

        String palavraAnterior = listaDePalavras[0];

        for (int i = 1; i < listaDePalavras.length; i++) {
            String palavraAtual = listaDePalavras[i];

            if (verificarSeDuasPalavrasEstaoOrdenadas(palavraAtual.toLowerCase(), palavraAnterior.toLowerCase()) == false) {
                return false;
            }

            palavraAnterior = palavraAtual;
        }

        return true;
    }

    private boolean verificarSeDuasPalavrasEstaoOrdenadas(String palavraAtual, String palavraAnterior) {
        int menorTamanho = Math.min(palavraAtual.length(), palavraAnterior.length());

        for (int i = 0; i < menorTamanho; i++) {
            char caracterePalavraAtual = palavraAtual.charAt(i);
            char caracterePalavraAnterior = palavraAnterior.charAt(i);

            if (caracterePalavraAtual < caracterePalavraAnterior) {
                return false;
            } else if (caracterePalavraAtual > caracterePalavraAnterior) {
                return true;
            }
        }

        if (palavraAtual.length() >= palavraAnterior.length()) {
            return true;
        } else {
            return false;
        }
    }
}
