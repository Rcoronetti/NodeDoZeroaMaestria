const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const user = require('./user')

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        requirede: true,

    },
    number: {
        type: DataTypes.STRING,
        requirede: true,
    },
    city: {
        type: DataTypes.STRING,
        requirede: true,

    }
})

Address.belongsTo(user)

module.exports = Address