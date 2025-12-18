import { Transport } from 'svesta';

// This is configured on the default context
Transport.configure({ BASE_URL: 'https://jsonplaceholder.typicode.com' });

export const prerender = true;