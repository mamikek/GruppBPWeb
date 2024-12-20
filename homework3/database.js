// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "testWad",
    host: "localhost",
    port: "5432" // port 5433 because it would not let me use the 5432
});

const execute = async(query1, query2) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query1); // sends queries
        await pool.query(query2); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "posters" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(500) NOT NULL,
        "picture" VARCHAR(500),
        "date" VARCHAR(200)
    );`;

const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "users" (
        id SERIAL PRIMARY KEY,
        email VARCHAR(500) NOT NULL UNIQUE,
        password VARCHAR(500) NOT NULL 
    );`;



// A function to execute the previous query   
execute(createTblQuery1, createTblQuery2).then(result => {
    if (result) {
        console.log('If does not exists, table "users" and  table "posters" are created');
    }
});

module.exports = pool;