import postgres from 'postgres';

// Use process.env.DATABASE_URL in production (Heroku), and PGCONNECT for local development.
const connectionString = process.env.DATABASE_URL || import.meta.env.VITE_PGCONNECT;

const sql = postgres(connectionString, {});

export default sql;
