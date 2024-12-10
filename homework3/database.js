// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "kogemata",
    database: "testWad",
    host: "localhost",
    port: "5433" // port 5433 because it would not let me use the 5432
});

module.exports = pool;