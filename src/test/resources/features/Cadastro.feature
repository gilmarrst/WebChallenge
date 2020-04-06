#Author: gilmarrodriguesst@gmail.com
@WebChallenge
Feature: Cadastrar novo usuário no site automationpractice.com

  Scenario: Cadastro de usuario
    Given que acesso a url "http://automationpractice.com/"
    When clico em sing in
    And preencho o email "gilmar@amedigital.com" para realizar o cadastro
    And clico no botão create account
    Then preencho a tela de cadastro
      | Title          | Mr.                          |
      | PI_FristName   | Gilmar                       |
      | PI_LastName    | Santos                       |
      | Password       | 0AA123456                    |
      | DateOfBirth    | 27/03/1996                   |
      | SigUpNews      | false                        |
      | ReciveSpecial  | false                        |
      | YA_FristName   | Gilmar                       |
      | YA_LastName    | Santos                       |
      | Company        | Ame Digital                  |
      | AddressLine1   | Avenida Quatro de Abril      |
      | AddressLine2   | BL40, APT 808                |
      | City           | Central City                 |
      | state          | New York                     |
      | ZipCode        |                        12345 |
      | Country        | United States                |
      | AdditionalInfo | Ao lado da tudo tem          |
      | HomePhone      |                     34000000 |
      | MobilePhonee   |                  84756932548 |
      | AddressAlias   | Abaixo do que passa por cima |
    And clico no botao Register
    And valido que o cadastro foi realizado com sucesso
    And realizo logout do sistema
