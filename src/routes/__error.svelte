<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ status, error }) => {
		return {
			props: {
				status,
				message: error.message,
				stack: error.stack
			}
		};
	};
</script>

<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import '../styles/home.scss';

	export let status: number;
	export let message: string;
	export let stack: string;
</script>

<main>
	{#if status === 404}
		<Meta title="Page inexistante" />

		<h1>Page inexistante</h1>
		<p>Nous sommes désolés, mais la page que vous essayez de consulter n'existe pas.</p>
	{:else}
		<Meta title="Error" />

		<h1>Erreur {status}</h1>

		<h2>
			<pre>{message}</pre>
		</h2>
		<pre>{stack}</pre>
	{/if}
</main>
