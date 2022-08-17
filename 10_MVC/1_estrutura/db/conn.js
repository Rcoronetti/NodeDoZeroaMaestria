const { Sequelize } = require('sequelize') // importando sequelize para conexão com banco

// instânciando novo objeto, parâmetros: nome da base de dados, usuário e senha. depois endereço e banco a ser utilizado.
const sequelize = new Sequelize('nodemvc2', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
})


// try catch para conexão ou detecção do erro.
try {
    sequelize.authenticate()
    console.log('Conectamos ao Postgres!');

} catch (error) {
    console.log(`Não foi possível conectar: ${error}`);
}

exports.default = sequelize