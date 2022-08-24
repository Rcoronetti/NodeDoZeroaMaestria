import mongoose from '../db/conn'
const { Schema } = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        available: {
            type: Boolean
        },
        user: Object,
        adopter: Object

    },
        { timestamps: true }, // cria 2 colunas novas, creatDate e updateDate. Esses parametros se alteram quando  os campos forem atualizadpos,
    ),
)

export default Pet