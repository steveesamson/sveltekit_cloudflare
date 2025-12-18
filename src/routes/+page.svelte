<script lang="ts">
	import type { StoreResult, StoreProps, StoreState, Store } from 'svesta';
	import type { IngressType, User } from '$lib/types';
	import { useStore, Loader, Resource } from 'svesta';
	import UserList from '$lib/views/users.svelte';
	import { resultTransformer } from '$lib';

	type ViewData = { data: StoreState<User> };
	const { data }: ViewData = $props();

	const userStore = $derived.by<Store<User>>(() => {
		const usersProps: StoreProps<User> = {
			resultTransformer,
			initData: data,
			queryTransformer(raw: IngressType) {
				return raw;
			}
		};
		return useStore<User>('/users', usersProps);
	});
</script>

{#snippet resolve({ data, page, pages, loading, error }: StoreResult<User>)}
	{#if data}
		<UserList users={data} />
	{/if}

	{#if loading}
		<Loader text="Wait a sec..." />
	{/if}

	{#if error}
		<p>Error:{error}</p>
	{/if}

	<!-- {#if data}
		<div class="buttons">
			<button onclick={userStore.prev} disabled={page === 1}> Previous page </button>
			<button onclick={userStore.next} disabled={page === pages}> Next page </button>
			<button onclick={userStore.more} disabled={page === pages}> More(append to view)... </button>
		</div>
	{/if} -->
{/snippet}

<h1 class="text-center text-3xl font-bold">Cloudflare + Svelte</h1>
<section>
	<Resource store={userStore} {resolve} />
</section>

<style>
	:root {
		--loader-color: lime;
		--loader-background: #034;
	}

	.header {
		padding: 1rem 0;
	}
	/* .buttons {
		text-align: center;
	}
	button {
		padding: 0.5rem 1rem;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: #fff;
		cursor: pointer;
		font-size: 16px;
	} */
</style>
