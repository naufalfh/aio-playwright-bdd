@API
Feature: Get Method

    @get
    Scenario: Get list users
        Given Set base URL:
            | Base URL      | ENV_BASE_URL_REQRES   |
        Given Define headers:
            | Content-Type  | application/json |
            | Accept        | application/json |
            | Authorization | token            |
        


