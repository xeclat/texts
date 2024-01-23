import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const money= process.env.MONEY;
console.log(money);

const dbConfig = {
  host: process.env['DB_HOST'],
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 5432,  
};

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);

console.log(dbConfig);
const { Pool } = pg;

const pool = new Pool(dbConfig);

export default pool;