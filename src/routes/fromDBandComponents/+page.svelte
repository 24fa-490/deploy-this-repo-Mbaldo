<script>
    import ContainerTable from '$lib/ContainerTable.svelte';
    export let data; // Contains the data from the load function

    let clickedContainer = null;

    function handleContainerClick(container, event) {
        console.log('Clicked container:', container);
        clickedContainer = container;
    }
</script>

<h1>Container Summary</h1>

<!-- Pass containers from data to ContainerTable -->
<ContainerTable containers={data.containers} onContainerClicked={handleContainerClick} />

{#if clickedContainer}
    <p>Last clicked container: {clickedContainer.containernumber}</p>
{/if}
