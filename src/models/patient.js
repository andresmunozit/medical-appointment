const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize/config');

const Patient = sequelize.define('patient', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, {
  // Other model options go here
  freezeTableName: true
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

module.exports = Patient;