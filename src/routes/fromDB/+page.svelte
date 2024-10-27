<script>
	export let data;

	// Add state for form inputs
	let containerNumber = '';
	let nameOfShip = '';
	let containerSize = '';
	let dateContainerShipped = '';

	// Form submission function
	const submitForm = async (event) => {
		event.preventDefault(); // Prevent the default form submission behavior

		// Send the form data to the server
		const response = await fetch('/fromDB', { // Ensure the route matches your route
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

<h1>Fetched from Database</h1>

<!-- Display the list of containers -->
{#each data.containers as container}
	<div>
		<span class="id">{container.containernumber}</span>
		<span class="name">{container.nameofship}</span>
		<span class="size">{container.containersize}</span>
		<span class="date">{container.datecontainershipped}</span>
	</div>
{/each}

<!-- Add a form for submitting new container data -->
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

<span class=i>(database lives in PostgreSQL)</span>

<style>
	.id {
		margin-right: 10px;
		font-weight: bold;
	}
	.name {
		color: #999;
	}
	.i {
		font-style: italic;
	}
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
