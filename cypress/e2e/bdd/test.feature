Feature: Steam login

    I want to login to Steam using different credentials

    Background: Go to main page
      Given I open Steam website

    @test
    Scenario Outline: Login with different credentials
      When I click on login button
      And I enter user <user>
      And I enter password <password>
      And I click sign in button

      Examples:
          | user | password |
          | UserName2 | password45 |
          | User4Name | password56 |

    Scenario Outline: Login with different credentials
      When I click on Support link
      When I click on login button
      And I enter user <user>
      And I enter password <password>
      And I click sign in button

      Examples:
          | user | password |
          | UserName2 | password45 |
          | User4Name | password56 |
      