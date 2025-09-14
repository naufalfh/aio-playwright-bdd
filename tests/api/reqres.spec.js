import { test, expect } from '@playwright/test';
import * as reqLib from '../requestLib';

const BASE_URL = 'https://reqres.in';

test.describe('Get request', () => {
    test.only('Get list users from Reqres.in', async ({ }) => {
        const header = { 'Content-Type': 'application/json' };
        const param = { page: 2 };
        const response = await reqLib.requestGet(`${BASE_URL}/api/users`, param, header);


        expect(response.status()).toBe(200);
    })
})

// will not be used