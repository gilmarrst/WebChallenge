package br.com.webChallenge.stepDefs;

import br.com.webChallenge.iteracao.InteractionsWeb;
import br.com.webChallenge.page.ComunPage;
import br.com.webChallenge.page.HomePage;
import io.cucumber.java8.En;

public class ComunSteps implements En {

	InteractionsWeb i = new InteractionsWeb();

	public ComunSteps() {
		Given("que acesso a url {string}", (String url) -> {
			i.abrirUrl(url);
		});
		
		
		Then("realizo logout do sistema",()->{
			i.esperarPaginaCarregar(20);
			i.clicar(ComunPage.LNK_LOG_OUT);
			i.esperarPaginaCarregar(20);
			i.validarSeElementoExiste(HomePage.LNK_SING_IN);
		});
	}

}
