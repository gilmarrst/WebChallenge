package br.com.webChallenge.stepDefs;

import java.util.Map;

import br.com.webChallenge.iteracao.InteractionsWeb;
import br.com.webChallenge.page.CreateAnAccountPage;
import br.com.webChallenge.tdm.TDM;
import io.cucumber.datatable.DataTable;
import io.cucumber.java8.En;

public class CreateAnAccountSteps implements En {

	InteractionsWeb i = new InteractionsWeb();

	public CreateAnAccountSteps() {
		Then("preencho a tela de cadastro", (DataTable dados) -> {
			Map<String, String> map = dados.asMap(String.class, String.class);
			String[] DateOfBirth = map.get("DateOfBirth").split("/");
			i.esperarPaginaCarregar(10);
			i.clicarTitle(map.get("Title"), CreateAnAccountPage.RDB_GENDER_MR, CreateAnAccountPage.RDB_GENDER_MRS);
			i.escrever(CreateAnAccountPage.TXT_PI_FRIST_NAME, map.get("PI_FristName"));
			i.escrever(CreateAnAccountPage.TXT_PI_LAST_NAME, map.get("PI_LastName"));
			i.validarValue(CreateAnAccountPage.TXT_EMAIL, TDM.usuario.getEmail());
			TDM.usuario.setSenha(map.get("Password"));
			i.escrever(CreateAnAccountPage.TXT_PASSWORD, map.get("Password"));
			i.selecionarByValue(CreateAnAccountPage.SEL_DFB_DAYS, DateOfBirth[0]);
			i.selecionarByValue(CreateAnAccountPage.SEL_DFB_MONTHS, new Integer(DateOfBirth[1]).toString());
			i.selecionarByValue(CreateAnAccountPage.SEL_DFB_YEARS, DateOfBirth[2]);
			i.clicar(CreateAnAccountPage.CHK_NEWSLETTER, new Boolean(map.get("SigUpNews")));
			i.clicar(CreateAnAccountPage.CHK_RECIVE_ESPECIAL, new Boolean(map.get("ReciveSpecial")));
			i.escrever(CreateAnAccountPage.TXT_YA_FRIST_NAME, map.get("YA_FristName"));
			i.escrever(CreateAnAccountPage.TXT_YA_LAST_NAME, map.get("YA_LastName"));
			i.escrever(CreateAnAccountPage.TXT_COMPANY, map.get("Company"));
			i.escrever(CreateAnAccountPage.TXT_ADDRESS_LINE_1, map.get("AddressLine1"));
			i.escrever(CreateAnAccountPage.TXT_ADDRESS_LINE_2, map.get("AddressLine2"));
			i.escrever(CreateAnAccountPage.TXT_CITY, map.get("City"));
			i.selecionarByVisibleText(CreateAnAccountPage.SEL_STATE, map.get("state"));
			i.escrever(CreateAnAccountPage.TXT_ZIP_CODE, map.get("ZipCode"));
			i.selecionarByVisibleText(CreateAnAccountPage.SEL_COUNTRY, map.get("Country"));
			i.escrever(CreateAnAccountPage.TXT_ADDITIONAL_INFORMATION, map.get("AdditionalInfo"));
			i.escrever(CreateAnAccountPage.TXT_HOME_PHONE, map.get("HomePhone"));
			i.escrever(CreateAnAccountPage.TXT_MOBILE_PHONE, map.get("MobilePhonee"));
			i.escrever(CreateAnAccountPage.TXT_ADDRESS_ALLIAS, map.get("AddressAlias"));
		});
		
		Then("clico no botao Register",()->{
			i.clicar(CreateAnAccountPage.BTN_REGISTER);
		});
		

	}

}
