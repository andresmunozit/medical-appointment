const {DB_USER, POSTGRES_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);
module.exports = sequelize;