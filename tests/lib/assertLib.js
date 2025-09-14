import { expect } from "@playwright/test";

// Verify response status code
export const verifyStatusCode = async ( response, statusCode ) => {
    expect( response.status() ).toBe( statusCode );
}

// Verify response status text
export const verifyStatusText = async ( response, text ) => {
    expect( response.statusText() ).toBe( text )
}

// Verify response property containing string or array
export const verifyContains = async ( response, containValue ) => {
    expect( response ).toContain( containValue )
}

// Verify response property to have exact value
export const verifyValueIsSame = async ( response, propertyValue ) => {
    expect( response ).toBe( propertyValue )
}

// Verify response property to have deep equality value
export const verifyEqual = async ( response, equalValue ) => {
    expect( response ).toEqual( equalValue )
}