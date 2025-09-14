@API
Feature: Get Method

    @get
    Scenario: Get list users
        Given Set the URL:
            | base_url      | BASE_URL_REQRES       |
            | path          | /api/users            |
        And Define headers:
            | Content-Type  | application/json      |
            |x-api-key      | reqres-free-v1        |
        And Define params:
            | page          | 2                     |
        When Send GET request
        Then Verify response status code is 200
        And Verify response status text is "OK"
        And Verify response properties contains value:
            | per_page      | 6                         |
            | data[0].email | michael.lawson@reqres.in  |
            
        


