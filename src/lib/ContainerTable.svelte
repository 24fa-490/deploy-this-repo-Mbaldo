<script>
    import ContainerSummaryRow from '$lib/ContainerSummaryRow.svelte';
    export let containers = [];
    export let onContainerClicked = () => {};
</script>

<h3>Container List</h3>

{#each containers as container, ix}
	<div
        role="button"
        tabindex={ix + 1}
        on:keydown={(e) => e.key === 'Enter' && onContainerClicked(container, e)}
        on:click={(e) => onContainerClicked(container, e)}>
        
        <ContainerSummaryRow {container} /> <!-- Pass container data to the component -->
	</div>
{/each}

<style>
    div[role="button"] {
        margin: 5px;
        border: 1px solid black;
        cursor: pointer;
    }
</style>
