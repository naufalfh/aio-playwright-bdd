import { expect } from "@playwright/test";

class RequestLib {
    constructor( request ) {
        this.request = request;
    }

    async requestGet( path, paramsValue, headersValue ) {
        await this.request.get(path, { params: paramsValue, headers: headersValue });
    }

    async requestPost( path, option, value ) {
        await this.request.post(path, { [option]: value });
    }

    async requestPut( path, option, value ) {
        await this.request.put(path, { [option]: value });
    }

    async requestDelete( path, option ) {
        await this.request.delete(path, option);
    }

    async verifyStatusCode( response, statusCode ) {
        expect(response.status()).toBe(statusCode);
    }
}

export { RequestLib };
