<script>
	import { todos } from './store'
</script>

<h1>Todos</h1>
{#each $todos as todo}
	<div class="item" class:item--done={todo.done}>
		<input type="checkbox" bind:checked={todo.done}>
		<input type="text" bind:value={todo.title}>
		<button on:click={todos.remove(todo)}>X</button>
	</div>
{/each}

<button on:click={() => todos.add()}>Adicionar</button>

<style>
	.item {
		display: flex;
		align-items: center;
		width: fit-content;
	}

	.item--done {
		opacity: .5;
	}
</style>