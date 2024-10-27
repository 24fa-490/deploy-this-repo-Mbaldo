import sql from '$lib/server/database';

export async function load() {
    // Fetch the current containers from the database
    const rows = await sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containers`;

    console.log({ rows });

    // Return the data to the Svelte page
    return { containers: rows };
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.json();

        const { containerNumber, nameOfShip, containerSize, dateContainerShipped } = formData;

        try {
            // Insert the form data into the database
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
