<script>
	export let name;
	export let countStore;
</script>

<style>
	.intro {
		--intro-color: rgb(0, 129,251);

		position: absolute;
		text-align: center;
		color: var(--intro-color);
		border: 1px solid var(--intro-color);
		border-radius: 4px;
		padding: 4px;
		margin: 4px;
		top: 0;
		left: 0;
		right: 0;
	}
</style>

<div class="container-fluid">
	<div class="jumbotron intro">
		<h2>Hello {name}!</h2>
		<h3>{$countStore}</h3>
		<button class="btn btn-lg btn-primary" on:click={countStore.increment}>+</button>
		<button class="btn btn-lg btn-primary" on:click={countStore.decrement}>-</button>
		<button class="btn btn-lg btn-primary" on:click={countStore.reset}>reset</button>
	</div>
</div>