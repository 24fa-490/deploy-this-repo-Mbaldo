<script>
    export let data;

    let message = data?.message || '';
</script>

<h1>Container Management</h1>

<!-- Display plain text message -->
<p>{message}</p>

<!-- Add Container Form -->
<h2>Add New Container</h2>
<form method="POST" action="?/addcontainer">
    <label>
        Container Number:
        <input type="text" name="containernumber" required>
    </label>
    <br/>
    <label>
        Name of Ship:
        <input type="text" name="nameofship" required>
    </label>
    <br/>
    <label>
        Container Size:
        <input type="number" name="containersize" required>
    </label>
    <br/>
    <label>
        Date Container Shipped:
        <input type="date" name="datecontainershipped" required>
    </label>
    <br/>
    <button type="submit">Add Container</button>
</form>

<!-- Remove Container Form -->
<h2>Remove Container</h2>
<form method="POST" action="?/removecontainer">
    <label>
        Container Number:
        <input type="text" name="containernumber" required>
    </label>
    <br/>
    <button type="submit">Remove Container</button>
</form>

<style>
    form {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin: 10px 0;
    }

    input {
        padding: 5px;
    }

    button {
        padding: 8px 15px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
