import postgres from 'postgres';

// For production (Vercel or Heroku), it uses the DATABASE_URL, and for local development, it uses VITE_PGCONNECT
const connectionString = process.env.DATABASE_URL || import.meta.env.VITE_PGCONNECT;

// Set up the connection, adding SSL option for production if required
const sql = postgres(connectionString, {
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,  // Enable SSL in production
});

export default sql;
