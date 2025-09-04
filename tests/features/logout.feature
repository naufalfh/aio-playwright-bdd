@Logout
Feature: Sauce Demo Logout
    Background:
        Given User navigates to "https://www.saucedemo.com/"
        And User input "standard_user" on "usernameField"
        And User input "secret_sauce" on "passwordField"
        And User click on "loginButton"

    @TC-25
    Scenario: User can log out from the product page
        When User click on "menuButton"
        And User click on "logoutButton"
        Then User verify element "loginButton" is visible
