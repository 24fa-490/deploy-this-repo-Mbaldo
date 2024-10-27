import postgres from 'postgres';
import { PGCONNECT } from '$env/static/private';  // For local development

// Use DATABASE_URL in production (Heroku), PGCONNECT in local development
const connectionString = process.env.DATABASE_URL || PGCONNECT;

const sql = postgres(connectionString, {});

export default sql;
