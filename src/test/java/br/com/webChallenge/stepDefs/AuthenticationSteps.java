package br.com.webChallenge.stepDefs;

import br.com.webChallenge.iteracao.InteractionsWeb;
import br.com.webChallenge.page.AuthenticationPage;
import br.com.webChallenge.tdm.TDM;
import io.cucumber.java8.En;

public class AuthenticationSteps implements En{

InteractionsWeb i = new InteractionsWeb();	
	
	public AuthenticationSteps() {
		
		When("preencho o email {string} para realizar o cadastro",(String email)->{
			i.esperarPaginaCarregar(20);
			i.escreverEmailComNumeroAleatorio(AuthenticationPage.TXT_CAD_EMAIL, email);
		});
		
		When("clico no botão create account",()->{
			i.esperarPaginaCarregar(20);
			i.clicar(AuthenticationPage.BTN_CREATE_ACCOUNT);
		});
		
		When("preencho o email {string} para realizar o login",(String email)->{
			i.esperarPaginaCarregar(20);
			i.escrever(AuthenticationPage.TXT_LOG_EMAIL, email);
		});
		
		When("preencho a senha {string}",(String senha)->{
			i.escrever(AuthenticationPage.TXT_LOG_PASSWORD, senha);
		});
		
		When("clico no botao sing in",()->{
			i.clicar(AuthenticationPage.BTN_SING_IN);
		});
		
		Then("valido a mensagem {string}",(String msg)->{
			i.esperarPaginaCarregar(20);
			i.validarTextoContido(AuthenticationPage.MSG_LOGIN_ERRO, msg);
		});
		
		When("preencho o email",()->{
			i.esperarPaginaCarregar(20);
			i.escrever(AuthenticationPage.TXT_LOG_EMAIL, TDM.usuario.getEmail());
		});
		
		When("preencho a senha",()->{
			i.escrever(AuthenticationPage.TXT_LOG_PASSWORD, TDM.usuario.getSenha());
		});
	}
}
