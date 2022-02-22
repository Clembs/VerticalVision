<script>
	import Meta from '$lib/components/Meta.svelte';
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

<style lang="scss">
	main {
		padding: 3rem;
		header {
			user-select: none;
			display: flex;
			align-items: center;
			flex-direction: column;
			gap: 2rem;
			width: 70%;
			img.logo {
				width: 16rem;
			}
			.wordmark {
				display: flex;
				align-items: center;
				& > * {
					height: 3rem;
				}
			}
		}
		gap: 2rem;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: #f3f9ff;

		.buttons {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-top: 1rem;
			gap: 1rem;
			.button {
				background-color: #3a7dc9;
				text-decoration: none;
				border-radius: 2rem;
				color: white;
				padding: 1em;
				width: 200px;
				user-select: none;
				transition: cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
				cursor: pointer;
				&:hover {
					background-color: #1c4371;
					transition: cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
				}
			}
		}
	}
	@media (max-width: 768px) {
		main {
			header {
				width: 100%;
				img.logo {
					width: 50%;
				}
				.wordmark {
					align-self: center;
					flex-direction: column;
					width: -webkit-fill-available;
					gap: 1rem;
				}
			}
			.buttons {
				flex-direction: column;
				.button {
					width: 100%;
				}
			}
		}
	}
</style>
