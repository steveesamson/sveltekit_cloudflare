<script lang="ts" module>
	let selected = $state<User>();
</script>

<script lang="ts">
	import type { User } from '$lib/types';
	import avatar from '$lib/assets/avatar.jpeg';
	let user: User = $props();

	const showDetails = () => {
		selected = user;
	};
	const onKey = (e: KeyboardEvent) => {
		if (e.code === 'Escape') {
			selected = undefined;
		}
	};
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<li class="directory" onclick={showDetails}>
	<div class="image">
		<img src={avatar} alt="user avatar" loading="lazy" />
	</div>
	<div class="detail">
		<strong>{user.name}</strong>
		<em>{user.email}</em>
	</div>
</li>
<svelte:document onkeyup={onKey} />
{#if selected?.id === user.id}
	<section
		class="absolute inset-0 flex flex-col items-center justify-center rounded-md border border-blue-300 bg-blue-100"
	>
		<h1 class="my-3 text-3xl font-bold">User Details</h1>
		<p class="text-lg"><strong>Name:</strong> {selected?.name}</p>
		<p class="text-lg"><strong>Email:</strong> {selected?.email}</p>
		<p class="mt-4 text-gray-500">Press ESC key to close</p>
	</section>
{/if}

<style>
	.directory {
		display: flex;
		justify-content: flex-start;
		background-color: #fff;
		border: 1px solid #fff;
		margin: 1px 0;
		padding: 0.5rem;
		color: steelblue;
		text-align: left;
		box-shadow: 0px 2px 4px rgba(32, 32, 32, 0.11);
		transition: all 0.37s ease-in-out;
		cursor: pointer;
	}
	.directory:hover {
		background-color: #eee;
		border-color: #eee;
	}

	.image {
		width: 60px;
		min-width: 60px;
		height: 60px;
		min-height: 60px;
		margin-right: 8px;
		border: 2px solid steelblue;
		background-color: #efefef;
		border-radius: 50%;
		overflow: hidden;
	}
	.detail {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.detail strong {
		font-size: 18px;
		margin-bottom: 8px;
	}
	.detail em {
		font-size: 16px;
		font-style: normal;
		color: #666;
	}
	.image img {
		width: 100%;
		min-width: 100%;
	}

	@media screen and (min-width: 400px) {
		.directory {
			border-radius: 8px;
		}
	}
	@media screen and (min-width: 600px) {
		.directory {
			margin: 0;
		}
	}
</style>
