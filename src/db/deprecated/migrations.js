const {Pool} = require('pg');

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};

const pool = new Pool(config);

(async () => {
    const createPatientTable = await pool.query(`
        CREATE TABLE patient (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        date_of_birth DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
    )`);
})();