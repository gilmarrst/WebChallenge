package br.com.webChallenge.runner;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import br.com.webChallenge.util.DriverContext;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = "", plugin = { "pretty","html:target/report/html" }, monochrome = true, tags = {
		"@WebChallenge"})
public class RunnerTest {
	
	@BeforeClass
	public static void beforeClass()
	{
		//chrome ou firefox
		System.setProperty("navegador", "firefox");
	}

	@AfterClass
	public static void afterClass() {
		DriverContext.getDriver().quit();
	}
}
