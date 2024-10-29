import sql from '$lib/server/database';

export async function load() {
    try {
        // Await the database query to ensure it resolves
        const rows = await sql`
        SELECT
            containerNumber,
            nameOfShip,
            containerSize,
            dateContainerShipped
        FROM
            containers`;

        console.log({ rows });  // This will now log the actual rows

        // Return the data to the Svelte page
        return { containers: rows };
    } catch (error) {
        console.error('Error fetching containers from database:', error);
        return { containers: [], error: 'Failed to fetch containers.' };
    }
}
