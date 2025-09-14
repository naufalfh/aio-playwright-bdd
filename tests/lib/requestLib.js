import { expect } from "@playwright/test";

class RequestLib {
    constructor ( request ) {
        this.request = request;
    }

    // Send GET request
    async requestGet( url, paramsValue, headersValue ) {
        return await this.request.get( url, { params: paramsValue, headers: headersValue } );
    }

    // Send POST request
    async requestPost( url, option, value ) {
        return await this.request.post( url, { [option]: value } );
    }

    // Send PUT request
    async requestPut( url, option, value ) {
        return await this.request.put( url, { [option]: value } );
    }

    // Send DELETE request
    async requestDelete( url, option ) {
        return await this.request.delete( url, option );
    }
}

export { RequestLib };
