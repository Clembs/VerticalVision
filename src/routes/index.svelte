<script>
	import Meta from '$lib/components/Meta.svelte';
	import '../styles/home.scss';
</script>

<Meta />

<main>
	<header>
		<img class="logo" src="./logo.svg" alt="VerticalVision logo" draggable="false" />
		<div class="wordmark">
			<img src="./vertical.svg" alt="Vertical" draggable="false" />
			<img src="./vision.svg" alt="Vision" draggable="false" />
		</div>
	</header>
	<section>
		<h1>Site en construction</h1>
		<p>Le site n'est pas encore prêt, mais vous pouvez quand même nous contacter</p>
		<div role="group" class="buttons">
			<a class="button" role="button" href="mailto:v.voisin@protonmail.com">Par mail</a>
			<a class="button" role="button" href="tel:+33668387662">Par téléphone</a>
		</div>
	</section>
</main>
