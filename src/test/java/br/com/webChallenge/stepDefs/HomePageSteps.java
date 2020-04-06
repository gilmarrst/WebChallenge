package br.com.webChallenge.stepDefs;

import br.com.webChallenge.iteracao.InteractionsWeb;
import br.com.webChallenge.page.HomePage;
import io.cucumber.java8.En;

public class HomePageSteps implements En{
InteractionsWeb i = new InteractionsWeb();	
	
	public HomePageSteps() {
		When("clico em sing in",()->{
			i.clicar(HomePage.LNK_SING_IN);
		});
	}

}
