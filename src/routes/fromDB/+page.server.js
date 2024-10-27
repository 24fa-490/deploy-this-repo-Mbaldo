import sql from '$lib/server/database';

export async function load() {
    try {
        // Fetch the current containers from the database
        const rows = await sql`
        SELECT
            containerNumber,
            nameOfShip,
            containerSize,
            dateContainerShipped
        FROM
            containers`;

        return { containers: rows };
    } catch (error) {
        console.error('Database fetch error:', error);
        return { containers: [] };
    }
}

export const actions = {
    default: async ({ request }) => {
        try {
            // Parse the form data from the request
            const formData = await request.json();
            const { containerNumber, nameOfShip, containerSize, dateContainerShipped } = formData;

            // Insert the new container data into the database
            await sql`
            INSERT INTO containers (
                containerNumber,
                nameOfShip,
                containerSize,
                dateContainerShipped
            ) VALUES (
                ${containerNumber},
                ${nameOfShip},
                ${containerSize},
                ${dateContainerShipped}
            )`;

            return { success: true, message: 'Container added successfully!' };
        } catch (error) {
            console.error('Database insert error:', error);
            return { success: false, error: 'Failed to add container.' };
        }
    }
};
