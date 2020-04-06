package br.com.webChallenge.page;

import org.openqa.selenium.By;

public class CreateAnAccountPage {
	
	public static By RDB_GENDER_MR = By.id("id_gender1");
	public static By RDB_GENDER_MRS = By.id("id_gender2");
	
	public static By TXT_PI_FRIST_NAME = By.id("customer_firstname");
	public static By TXT_PI_LAST_NAME = By.id("customer_lastname");
	public static By TXT_EMAIL = By.id("email");
	public static By TXT_PASSWORD = By.id("passwd");
	public static By TXT_YA_FRIST_NAME = By.id("firstname");
	public static By TXT_YA_LAST_NAME = By.id("lastname");
	public static By TXT_COMPANY = By.id("company");
	public static By TXT_ADDRESS_LINE_1 = By.id("address1");
	public static By TXT_ADDRESS_LINE_2 = By.id("address2");
	public static By TXT_CITY = By.id("city");
	public static By TXT_ZIP_CODE = By.id("postcode");
	public static By TXT_ADDITIONAL_INFORMATION = By.id("other");
	public static By TXT_HOME_PHONE = By.id("phone");
	public static By TXT_MOBILE_PHONE = By.id("phone_mobile");
	public static By TXT_ADDRESS_ALLIAS = By.id("alias");
	
	public static By SEL_DFB_DAYS = By.id("days");
	public static By SEL_DFB_MONTHS = By.id("months");
	public static By SEL_DFB_YEARS = By.id("years");
	public static By SEL_STATE = By.id("id_state");
	public static By SEL_COUNTRY = By.id("id_country");
	
	public static By CHK_NEWSLETTER = By.id("newsletter");
	public static By CHK_RECIVE_ESPECIAL = By.id("optin");
	
	public static By BTN_REGISTER = By.id("submitAccount");
	

}
