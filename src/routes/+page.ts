import { Transport, type StoreState } from 'svesta';
import type { PageLoad } from './$types.js';
import { resultTransformer } from '$lib';
import type { User } from '$lib/types.js';

export const load: PageLoad = async ({ fetch }): Promise<StoreState<User[]>> => {
    // This could be happening on the server and we have a ref to a fetch
    // implementation, let's use it by passing it to the configure
    // method of Transport

    const transport = Transport.instance({ fetch });

    const { error, ...rest } = await transport.get<User[]>('/users?_limit=9&_offset=0');

    return { ...resultTransformer(rest), error } as StoreState<User[]>;
};