import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures"; 

const { Given, When, Then } = createBdd(test);

let baseUrl;
let header;
let param;
let payload;
let response;

Given('Set base URL:', async ( { }, dataTable ) => {
    baseUrl = dataTable.hashes();
})

Given('Define headers:', async ( { }, dataTable ) => {
    header = dataTable.rowsHash();
    // console.log(header);
})

Given('Define params:', async ( { }, dataTable ) => {
    param = dataTable.rowsHash();
})

When('Set request body:', async ( { }, dataTable ) => {
    payload = dataTable.rowsHash();
})

When('Send GET request', async ( { reqresApi } ) => {
    response = await reqresApi.requestGet( `${baseUrl}/api/users`, param, header );
})

Then('Verify response status code is {int}', async ( { }, statusCode ) => {
    await reqresApi.verifyStatusCode( response, statusCode );
})