import type { Params, StoreResult } from "svesta";
import { type User } from './types.js';


export function resultTransformer(raw: Params): StoreResult<User> {
    const { status: _, ...rest } = raw;
    const data = Object.values(rest);
    // const { page, per_page: limit, total: recordCount, total_pages: pages, data } = raw;
    return { page: 1, limit: 10, recordCount: data.length, pages: 1, data } as StoreResult<User>;
}