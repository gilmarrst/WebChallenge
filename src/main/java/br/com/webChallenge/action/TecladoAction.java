package br.com.webChallenge.action;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import br.com.webChallenge.tdm.TDM;
import br.com.webChallenge.util.DriverContext;
import br.com.webChallenge.util.GeradorNumerosAleatorios;

public interface TecladoAction {
	
	
	default void escrever(By elemento,String texto)
	{
		WebDriverWait wait = new WebDriverWait(DriverContext.getDriver(), 60);
		wait.until(ExpectedConditions.presenceOfElementLocated(elemento));
		DriverContext.getDriver().findElement(elemento).clear();
		DriverContext.getDriver().findElement(elemento).sendKeys(texto);
		
	}
	
	
	default void escreverEmailComNumeroAleatorio(By elemento,String texto)
	{
		String[] textoSeparado = texto.split("@");
		textoSeparado[0] += GeradorNumerosAleatorios.gerar4numerosAleatorios();
		texto= textoSeparado[0]+"@"+textoSeparado[1];
		WebDriverWait wait = new WebDriverWait(DriverContext.getDriver(), 60);
		wait.until(ExpectedConditions.presenceOfElementLocated(elemento));	
		DriverContext.getDriver().findElement(elemento).clear();
		DriverContext.getDriver().findElement(elemento).sendKeys(texto);
		TDM.usuario.setEmail(texto);
		
	}
	
	
	default void selecionarByVisibleText(By elemento, String valor)
	{
		Select sel = new Select(DriverContext.getDriver().findElement(elemento));
		sel.selectByVisibleText(valor);
	}
	
	default void selecionarByValue(By elemento, String valor)
	{
		Select sel = new Select(DriverContext.getDriver().findElement(elemento));
		sel.selectByValue(valor);;
	}
	
	
}
