const DataType = require('sequelize');
const db = require('../config/db');

const Users = db.define('users',{
  id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  name: {
      type: DataType.TEXT,
      allowNull: false
  },
  email: {
      type: DataType.TEXT,
      allowNull: false,
      unique: true
  },
  password: {
      type: DataType.TEXT,
      allowNull: false
  }
},{
  timestamps: false
});

module.exports = Users;
