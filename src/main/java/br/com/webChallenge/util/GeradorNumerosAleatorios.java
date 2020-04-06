package br.com.webChallenge.util;

import java.util.Random;

public class GeradorNumerosAleatorios {
	
	public static String gerar4numerosAleatorios()
	{

       String numerosGerados = "";
        Random gerador = new Random();

        for (int i = 0; i < 4; i++) {
            numerosGerados += gerador.nextInt(9);
         }
        
		return numerosGerados;
    }

}
