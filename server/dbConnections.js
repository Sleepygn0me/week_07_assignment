//TODO: set up database pool;
//import dotenv package
import dotenv from "dotenv";
//import pg package
import pg from "pg";

//config dotenv
dotenv.config();

//set up pool with pg
const dbConnection = process.env.DATABASE_URL;

//set up pool
export const db = new pg.Pool({
  connectionString: dbConnection,
});
