import sql from '$lib/server/database'; // Ensure this path matches your project structure

export async function load() {
    try {
        const rows = await sql`
        SELECT
            containerNumber AS containernumber,
            nameOfShip AS nameofship,
            containerSize AS containersize,
            dateContainerShipped AS datecontainershipped
        FROM containers`;

        return { containers: rows };
    } catch (error) {
        console.error('Database query error:', error);
        return { containers: [] };
    }
}
