package br.com.webChallenge.page;

import org.openqa.selenium.By;

public class AuthenticationPage {
	
	public static By TXT_CAD_EMAIL = By.id("email_create");
	public static By TXT_LOG_EMAIL = By.id("email");
	public static By TXT_LOG_PASSWORD = By.id("passwd");
	
	public static By BTN_CREATE_ACCOUNT = By.id("SubmitCreate");
	public static By BTN_SING_IN = By.id("SubmitLogin");
	
	public static By MSG_LOGIN_ERRO = By.xpath("//div[@id='center_column']/div[@class='alert alert-danger']");

}
