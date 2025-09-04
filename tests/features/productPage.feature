@Product @mode:parallel
Feature: Sauce Demo Product Page
    Background:
        Given User navigates to "https://www.saucedemo.com/"
        And User input "standard_user" on "usernameField"
        And User input "secret_sauce" on "passwordField"
        And User click on "loginButton"

    @TC-5
    Scenario: User can see all product catalog in product page
        Then User verify element "inventoryContainer" is visible

    @TC-6
    Scenario Outline: User can sort product by selected sort type "<sortType>"
        When User select "<sortType>" on "sortButton" list
        Then User verify element "firstItem" contains "<Top Item>"
    Examples:
        | sortType            |Top Item                          |
        | Name (A to Z)       |Sauce Labs Backpack               |
        | Name (Z to A)       |Test.allTheThings() T-Shirt (Red) |
        | Price (low to high) |Sauce Labs Onesie                 |
        | Price (high to low) |Sauce Labs Fleece Jacket          |

    @TC-9
    Scenario: User can add item to cart from product list page
        When User click on "addToCartButton"
        Then User verify element "cartBadge" is visible

    @TC-11
    Scenario: User can directly remove product from cart from product list page 
        When User click on "addToCartButton"
        And User verify element "cartBadge" is visible
        And User click on "removeButton"
        Then User verify element "cartBadge" is not visible
