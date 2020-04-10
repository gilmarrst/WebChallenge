package br.com.webChallenge.action;

import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;

import br.com.webChallenge.util.DriverContext;

public interface ValidacoesAction {

	default void validarValue(By elemento, String valor) {
		assertTrue(DriverContext.getDriver().findElement(elemento).getAttribute("value").equals(valor));

	}

	default void validarSeElementoExiste(By elemento) {
		try {
			DriverContext.getDriver().findElement(elemento);
		} catch (NoSuchElementException e) {
			Assert.fail("Elemento: " + elemento + "não encontrado");
		}
	}

	default void validarTextoContido(By elemento, String valorEsperado) {
		String texto = DriverContext.getDriver().findElement(elemento).getText();
		if (!texto.contains(valorEsperado)) {
			Assert.fail("Elemento: " + elemento + "não contém o texto: "+ valorEsperado);
		}
	}
}
