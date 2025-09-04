@Checkout
Feature: Sauce Demo Checkout Page
    Background:
        Given User navigates to "https://www.saucedemo.com/"
        And User input "standard_user" on "usernameField"
        And User input "secret_sauce" on "passwordField"
        And User click on "loginButton"
        

    @TC-20
    Scenario: User can proceed checkout to complete order
        When User click on "addToCartButton"
        And User click on "cartIcon"
        And User verify element "cartContainer" is visible
        And User verify element "cartBadge" is visible
        And User click on "checkoutButton"
        And User input "Alex" on "firstNameField"
        And User input "Barros" on "lastNameField"
        And User input "12345" on "postalCodeField"
        And User click on "continueButton"
        And User verify element "checkoutOverview" contains "Checkout: Overview"
        And User click on "finishButton"
        Then User verify text "Thank you for your order!" is visible
