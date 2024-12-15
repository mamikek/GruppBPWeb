// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "testWad",
    host: "localhost",
    port: "5432" // port 5433 because it would not let me use the 5432
});

module.exports = pool;