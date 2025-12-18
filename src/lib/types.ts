import type { Params } from 'svesta';

export type User = {
    id: number;
    email: string;
    name: string;
    username: string;
    avatar: string;
};

export type IngressType = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Params;
};
