$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Cadastro.feature");
formatter.feature({
  "name": "Cadastrar novo usuário no site automationpractice.com",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WebChallenge"
    }
  ]
});
formatter.scenario({
  "name": "Cadastro de usuario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebChallenge"
    }
  ]
});
formatter.step({
  "name": "que acesso a url \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em sing in",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.HomePageSteps.\u003cinit\u003e(HomePageSteps.java:11)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o email \"gilmar@amedigital.com\" para realizar o cadastro",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:14)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão create account",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:19)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a tela de cadastro",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.CreateAnAccountSteps.\u003cinit\u003e(CreateAnAccountSteps.java:16)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao Register",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.CreateAnAccountSteps.\u003cinit\u003e(CreateAnAccountSteps.java:46)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que o cadastro foi realizado com sucesso",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.MyAccountSteps.\u003cinit\u003e(MyAccountSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizo logout do sistema",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:18)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login no site automationpractice.com",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WebChallenge"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "Acesso a tela de login do site",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "que acesso a url \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em sing in",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.HomePageSteps.\u003cinit\u003e(HomePageSteps.java:11)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login sem informar email e senha",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebChallenge"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "preencho o email \"\" para realizar o login",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:24)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a senha \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:29)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao sing in",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:33)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"An email address required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:37)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Acesso a tela de login do site",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "que acesso a url \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em sing in",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.HomePageSteps.\u003cinit\u003e(HomePageSteps.java:11)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login sem informar a senha",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebChallenge"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "preencho o email \"gilmar2652@amedigital.com\" para realizar o login",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:24)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a senha \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:29)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao sing in",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:33)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Password is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:37)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Acesso a tela de login do site",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "que acesso a url \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em sing in",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.HomePageSteps.\u003cinit\u003e(HomePageSteps.java:11)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login informando a senha inválida",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebChallenge"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "preencho o email \"gilmar2652@amedigital.com\" para realizar o login",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:24)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a senha \"teste\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:29)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao sing in",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:33)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Authentication failed.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:37)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Acesso a tela de login do site",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "que acesso a url \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em sing in",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.HomePageSteps.\u003cinit\u003e(HomePageSteps.java:11)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login com sucesso",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebChallenge"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "preencho o email \"gilmar2652@amedigital.com\" para realizar o login",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:24)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a senha \"0AA123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:29)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao sing in",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:33)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que o login foi realizado com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.MyAccountSteps.\u003cinit\u003e(MyAccountSteps.java:18)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizo logout do sistema",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:18)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Acesso a tela de login do site",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "que acesso a url \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em sing in",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.HomePageSteps.\u003cinit\u003e(HomePageSteps.java:11)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login com os dados utilizados no cadastro(PLUS)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebChallenge"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "preencho o email",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:42)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a senha",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:47)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao sing in",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.AuthenticationSteps.\u003cinit\u003e(AuthenticationSteps.java:33)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que o login foi realizado com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.MyAccountSteps.\u003cinit\u003e(MyAccountSteps.java:18)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizo logout do sistema",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.webChallenge.stepDefs.ComunSteps.\u003cinit\u003e(ComunSteps.java:18)"
});
formatter.result({
  "status": "passed"
});
});