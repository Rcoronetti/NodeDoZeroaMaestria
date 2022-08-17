const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
