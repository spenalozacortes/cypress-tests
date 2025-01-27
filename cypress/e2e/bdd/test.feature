Feature: Google Main Page

    I want to open a search engine

    @test
    Scenario: Opening a search engine page
      Given I open Google page
      Then I see "Google" in the title
      