import postgres from 'postgres';

// For production (Vercel or cloud provider), it uses the DATABASE_URL, and for local development, it uses VITE_PGCONNECT
const connectionString = process.env.DATABASE_URL || import.meta.env.VITE_PGCONNECT;

// Set up the connection, ensure SSL is used in production
const sql = postgres(connectionString, {
  ssl: connectionString.includes('localhost') ? false : { rejectUnauthorized: false },  // Disable SSL for local development, enable for production
});

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('VITE_PGCONNECT:', import.meta.env.VITE_PGCONNECT);


export default sql;
