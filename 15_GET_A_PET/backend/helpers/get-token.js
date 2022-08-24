//extraindo token da requisição

const getToken = (req) => {

    const authHeader = req.headers.authorization //authorization é um cabeçalho usado para autenticação básica.
    const token = authHeader.split(' ')[1]
    return token
}

export default getToken