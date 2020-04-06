#Author: gilmarrodriguesst@gmail.com
@WebChallenge @Login
Feature: Login no site automationpractice.com

  Background: Acesso a tela de login do site
    Given que acesso a url "http://automationpractice.com/"
    Then clico em sing in

  Scenario: Realizar login sem informar email e senha
    When preencho o email "" para realizar o login
    And preencho a senha ""
    And clico no botao sing in
    Then valido a mensagem "An email address required."

  Scenario: Realizar login sem informar a senha
    When preencho o email "gilmar2652@amedigital.com" para realizar o login
    And preencho a senha ""
    And clico no botao sing in
    Then valido a mensagem "Password is required."

  Scenario: Realizar login informando a senha inválida
    When preencho o email "gilmar2652@amedigital.com" para realizar o login
    And preencho a senha "teste"
    And clico no botao sing in
    Then valido a mensagem "Authentication failed."

  Scenario: Realizar login com sucesso
    When preencho o email "gilmar2652@amedigital.com" para realizar o login
    And preencho a senha "0AA123456"
    And clico no botao sing in
    Then valido que o login foi realizado com sucesso
    And realizo logout do sistema

#E preciso que o cadastro seja executado
  Scenario: Realizar login com os dados utilizados no cadastro(PLUS)
    When preencho o email
    And preencho a senha 
    And clico no botao sing in
    Then valido que o login foi realizado com sucesso
    And realizo logout do sistema
