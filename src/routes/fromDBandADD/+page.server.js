import sql from '$lib/server/database';

export const actions = {
    addcontainer: async ({ request }) => {
        const formData = await request.formData();
        const containernumber = formData.get('containernumber');
        const nameofship = formData.get('nameofship');
        const containersize = formData.get('containersize');
        const datecontainershipped = formData.get('datecontainershipped');

        try {
            await sql`
                INSERT INTO containers (
                    containernumber,
                    nameofship,
                    containersize,
                    datecontainershipped
                ) VALUES (
                    ${containernumber},
                    ${nameofship},
                    ${containersize},
                    ${datecontainershipped}
                )`;
            return { success: true, message: 'Container added successfully.' };
        } catch (error) {
            return { success: false, message: 'Failed to add container.' };
        }
    },
    removecontainer: async ({ request }) => {
        const formData = await request.formData();
        const containernumber = formData.get('containernumber');

        try {
            const result = await sql`
                DELETE FROM containers
                WHERE containernumber = ${containernumber}
                RETURNING *`;

            if (result.count > 0) {
                return { success: true, message: 'Container removed successfully.' };
            } else {
                return { success: false, message: 'Container not found.' };
            }
        } catch (error) {
            return { success: false, message: 'Failed to remove container.' };
        }
    }
};

export async function load() {
    const rows = await sql`
        SELECT
            containernumber,
            nameofship,
            containersize,
            datecontainershipped
        FROM containers`;

    return { containers: rows };
}
