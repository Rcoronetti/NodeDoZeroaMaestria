//importando datatypes para acesso aos tipos de dados do banco
const { DataTypes } = require('sequelize')

//chamando conexão do banco, para fazer interligação na definição do model
const db = require('../db/conn')



//classe
//define irá definir o model. dentro de define normalmente vai o nome do model e posteriomente definimos os tipos.
const user = db.define('user', {
    //usuario ira ter um nome
    name: {
        // tipo será string
        type: DataTypes.STRING,

        //não quero que tenha valores nulos. NULL
        allowNull: false
    },


    //profissão
    occupation: {

        //será string
        type: DataTypes.STRING,

        //não quero que o campo seja vazio nem nulo
        requirede: true
    },

    age: {
        type: DataTypes.INTEGER,
        requirede: true
    },

    salary: {
        type: DataTypes.FLOAT,
        requirede: true
    },

    //aceite do usuário
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = user
