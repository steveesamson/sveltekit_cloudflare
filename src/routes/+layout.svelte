<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import type { LayoutProps } from './$types.js';
	import { Offline } from 'svesta';
	import './layout.css';

	let { children }: LayoutProps = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<main>
	<Offline>
		<p>You're offline.</p>
	</Offline>
	{@render children()}
</main>

<style>
	:global(body) {
		/* background-color: #cbced5; */
		padding: 0;
		margin: 0;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		background-color: #efefef;
		width: 100%;
		text-align: center;
	}
	:global(pre) {
		padding: 1.5rem;
		margin-block: 1.5rem;
		margin-inline: 1rem;
		max-inline-size: 100%;
		border-radius: 0px;
		tab-size: 2;
		overflow-x: auto;
	}
	main {
		margin-inline: auto;
		width: 100%;
		text-align: left;
	}
	main {
		position: relative;
		padding-block: 1rem;
	}

	:global(p),
	:global(li) {
		line-height: 1.65;
		font-size: 1rem;
	}
	:global(p > code),
	:global(li > code) {
		font-weight: 600;
		/* background-color: #b5bccb; */
		background-color: #cbd4dc;
		padding: 0.2rem 0.25rem;
		border-radius: 5px;
	}
	:global(h1),
	:global(h2),
	:global(h3) {
		margin-block-start: 3rem;
		margin-inline: 1rem;
	}

	@media screen and (min-width: 600px) {
		main {
			width: min(100%, 60em);
		}

		:global(pre) {
			border-radius: 8px;
		}

		:global(h1),
		:global(h2),
		:global(h3) {
			margin-inline: 0;
		}
	}
</style>
