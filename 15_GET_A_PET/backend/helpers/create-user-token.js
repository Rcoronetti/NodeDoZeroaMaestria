import jwt from 'jsonwebtoken'

const createUserToken = async (user, req, res) => {

    //create a token
    const token = jwt.sign({
        name: user.name, // parâmetros que possibilitam validar o token ( metadatos)
        id: user._id
    }, "nossosecret") // como segundo parâmetro usa-se um secret, que seria uma forma de deixar o token único. É aconselhado usar strings complexas.

    //return token
    res.status(200).json({ message: 'Você está autenticado!', token: token, userId: user._id }) //  Este retorno será lido no frontend. 

}

export default createUserToken