import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures"; 

const { Given, When, Then } = createBdd(test);

let response;
let header;
let param;
let payload;

Given('Set base URL:', async ( dataTable ) => {
    baseUrl = dataTable.hashes();
})

Given('Define headers:', async ( dataTable ) => {
    header = dataTable.hashes();
    console.log(header);
})

Given('Define params:', async ( dataTable ) => {
    param = dataTable.hashes();
})

When('Set request body:', async ( dataTable ) => {
    payload = dataTable.hashes();
})

When('Send GET request', async ({ reqresApi }) => {
    response = await reqresApi.requestGet( `${BASE_URL}/api/users`, param, header );
})

Then('Verify response status code is {int}', async ( statusCode ) => {
    await reqresApi.verifyStatusCode( response, statusCode );
})