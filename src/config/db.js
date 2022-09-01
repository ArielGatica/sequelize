const { Sequelize } = require('sequelize');
const { db_connection } = require('./settings');

const sequelize = new Sequelize(db_connection);

module.exports = sequelize;