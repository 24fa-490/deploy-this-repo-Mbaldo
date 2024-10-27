<script>
    import ContainerTable from '$lib/ContainerTable.svelte'; // Import your component for container display
    export let data; // Data loaded from the database

    // Add state for form inputs
    let containerNumber = '';
    let nameOfShip = '';
    let containerSize = '';
    let dateContainerShipped = '';

    // Form submission function
    const submitForm = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Send the form data to the server
        const response = await fetch('/fromDBandComponents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                containerNumber,
                nameOfShip,
                containerSize,
                dateContainerShipped
            })
        });

        if (response.ok) {
            // Handle the response (e.g., refresh data or show success message)
            const updatedData = await response.json();
            console.log('Form submitted successfully:', updatedData);
        } else {
            console.error('Error submitting form');
        }
    };
</script>

<h1>Container Summary with Components</h1>

<!-- Display the containers using a component -->
<ContainerTable containers={data.containers} />

<!-- Form for adding a new container -->
<h2>Add New Container</h2>
<form on:submit={submitForm}>
    <label>
        Container Number:
        <input type="text" bind:value={containerNumber} required />
    </label>
    <br />
    <label>
        Name of Ship:
        <input type="text" bind:value={nameOfShip} required />
    </label>
    <br />
    <label>
        Container Size:
        <input type="number" bind:value={containerSize} step="any" required />
    </label>
    <br />
    <label>
        Date Shipped:
        <input type="date" bind:value={dateContainerShipped} required />
    </label>
    <br />
    <button type="submit">Submit</button>
</form>

<style>
    form {
        margin-top: 20px;
    }
    label {
        display: block;
        margin-bottom: 10px;
    }
    input {
        margin-left: 10px;
    }
</style>
