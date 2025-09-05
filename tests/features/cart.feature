@Cart
Feature: Sauce Demo Cart Page
    Background:
        Given User navigates to "https://www.saucedemo.com/"
        And User input "ENV_USERNAME" on "usernameField"
        And User input "ENV_PASSWORD" on "passwordField"
        And User click on "loginButton"
        And User click on "addToCartButton"

    @TC-14
    Scenario: User can remove a product from cart page
        When User click on "cartIcon"
        And User verify element "cartContainer" is visible
        And User verify element "cartBadge" is visible
        And User click on "removeButtonCart"
        Then User verify element "cartContainer" is not visible
        Then User verify element "cartBadge" is not visible

