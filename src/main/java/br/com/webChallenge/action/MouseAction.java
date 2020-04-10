package br.com.webChallenge.action;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import br.com.webChallenge.util.DriverContext;

public interface MouseAction {

	default void clicar(By elemento) {
		WebDriverWait wait = new WebDriverWait(DriverContext.getDriver(), 60);
		wait.until(ExpectedConditions.presenceOfElementLocated(elemento));
		DriverContext.getDriver().findElement(elemento).click();
	}

	default void clicarTitle(String title, By mr, By mrs) {
		WebDriverWait wait = new WebDriverWait(DriverContext.getDriver(), 60);
		By elemento = (title.equals("Mr.")) ? mr : mrs;
		wait.until(ExpectedConditions.presenceOfElementLocated(elemento));
		DriverContext.getDriver().findElement(elemento).click();
	}

	default void clicar(By elemento, Boolean click) {
		WebDriverWait wait = new WebDriverWait(DriverContext.getDriver(), 60);
		wait.until(ExpectedConditions.presenceOfElementLocated(elemento));
		if (click) {
			DriverContext.getDriver().findElement(elemento).click();
		}
	}

}
