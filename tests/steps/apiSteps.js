import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
import * as assert from "../lib/assertLib";
import * as helper from "../helper";

const { Given, When, Then } = createBdd(test);

let baseUrl;
let path;
let header;
let param;
let payload;
let response, responseBody;

// Defining Steps

Given('Set the URL:', async ( { }, dataTable ) => {
    const urlSet = dataTable.rowsHash();
    baseUrl = process.env[urlSet.base_url];
    path = urlSet.path;
})

Given('Define headers:', async ( { }, dataTable ) => {
    header = dataTable.rowsHash();
    // console.log(header);
})

Given('Define params:', async ( { }, dataTable ) => {
    param = dataTable.rowsHash();
})

Given('Set request body:', async ( { }, dataTable ) => {
    payload = dataTable.rowsHash();
})

// Request-sending Steps

When('Send GET request', async ( { requestApi } ) => {
    const key = 'page';
    response = await requestApi.requestGet( `${ baseUrl }${ path }`, param, header );
    responseBody = await response.json()
})

// Verifiying Steps

Then('Verify response status code is {int}', async ( { }, statusCode ) => {
    await assert.verifyStatusCode( response, statusCode );
})

Then('Verify response status text is {string}', async ( { }, statusText ) => {
    await assert.verifyStatusText( response, statusText );
})

Then('Verify response properties contains value:', async ( { }, dataTable ) => {
    const tempProp = dataTable.rowsHash();
    let contain;
    let jsonPath

    for ( let key in tempProp ) {
        contain = tempProp[key]
        jsonPath = await helper.readJsonPath(responseBody, key)

        if ( /^\d+$/.test( tempProp[key] ) && typeof tempProp[key] === "string" ) {
            contain = parseInt( tempProp[key] );
            await assert.verifyValueIsSame( jsonPath, contain );
        } else if ( typeof tempProp[key] === 'boolean' ) {
            await assert.verifyValueIsSame( jsonPath, contain );
        } else {
            await assert.verifyContains( jsonPath, contain);
        }
    }
})
