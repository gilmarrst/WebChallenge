package br.com.webChallenge.stepDefs;

import br.com.webChallenge.iteracao.InteractionsWeb;
import br.com.webChallenge.page.MyAccountPage;
import io.cucumber.java8.En;

public class MyAccountSteps implements En {

	InteractionsWeb i = new InteractionsWeb();

	public MyAccountSteps() {

		Then("valido que o cadastro foi realizado com sucesso", () -> {
			i.esperarPaginaCarregar(20);
			i.validarSeElementoExiste(MyAccountPage.LNK_MY_PERSONAL_INFORMATION);
		});

		Then("valido que o login foi realizado com sucesso", () -> {
			i.esperarPaginaCarregar(20);
			i.validarSeElementoExiste(MyAccountPage.LNK_MY_PERSONAL_INFORMATION);
		});

	}

}
