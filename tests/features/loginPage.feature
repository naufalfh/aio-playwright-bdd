@Login @mode:parallel
Feature: Sauce Demo Login Page
    Background:
        Given User navigates to "https://www.saucedemo.com/"

    @TC-1
    Scenario: User login into Saucedemo website by using standard user
        When User input "standard_user" on "usernameField"
        And User input "secret_sauce" on "passwordField"
        And User click on "loginButton"
        Then User verify url contains "/inventory.html"
        And User verify text "Products" is visible

    @TC-2 @TC-3 @TC-4
    Scenario Outline: User login into Saucedemo by using <condition>
        When User input "<username>" on "usernameField"
        And User input "<password>" on "passwordField"
        And User click on "loginButton"
        Then User verify element "errorMessageLogin" contains "<errorMessageText>"
    Examples:
        | condition          | username          | password          | errorMessageText                                                          |
        | locked user        |locked_out_user    | secret_sauce      | Epic sadface: Sorry, this user has been locked out.                       |
        | invalid credential |standard_user      | secret_sauce1     | Epic sadface: Username and password do not match any user in this service |
        | empty fields       |                   |                   | Epic sadface: Username and Password are required                          |
