import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import createuserToken from '../helpers/create-user-token.js'

//helpers
import getToken from '../helpers/get-token.js'
import getUserByToken from '../helpers/get-user-by-token.js'


export default class UserController {
    static async register(req, res) {

        const { name, email, phone, password, confirmpassword } = req.body

        //validations <=======================
        if (!name) {
            res.status(422).json({ Message: "O nome é obrigatório!" })
            return
        }
        if (!email) {
            res.status(422).json({ Message: "O email é obrigatório!" })
            return
        }
        if (!phone) {
            res.status(422).json({ Message: "O telefone é obrigatório!" })
            return
        }
        if (!password) {
            res.status(422).json({ Message: "A senha é obrigatória!" })
            return
        }
        if (!confirmpassword) {
            res.status(422).json({ Message: "a confirmação de senha  é obrigatória!" })
            return
        } if (password !== confirmpassword) {
            res.status(422).json({ Message: "A senha e a confirmação de senha precisam ser iguais!" })
            return
        }


        // check if user exists
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            res
                .status(422)
                .json({
                    Message: 'O email informado já está cadastrado!',
                })
            return
        }




        // create a password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //create a user
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash,
        })

        try {
            const newUser = await user.save()

            await createuserToken(newUser, req, res)

        } catch (error) {
            res.salt(500).json({ Message: error })

        }
    }

    //login com passagem de token
    static async login(req, res) {
        const { email, password } = req.body

        if (!email) {
            res.status(422).json({ message: "O email é obrigatório" })
            return
        }
        if (!password) {
            res.status(422).json({ message: 'A senha é obrigatória' })
            return
        }

        // check if user exists
        const user = await User.findOne({ email: email })
        if (!user) {
            res
                .status(422)
                .json({
                    Message: 'Não tem usuário cadastrado com esse email!',
                })
            return
        }


        //check if password match with db password
        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            res.status(422).json({ message: 'Senha inválida!' })
            return
        }
        await createuserToken(user, req, res)
    }

    //checking user by token
    static async checkUser(req, res) {
        let currentUser

        if (req.headers.authorization) {

            const token = getToken(req)
            const decoded = jwt.verify(token, 'nossosecret') // decodificando o token

            currentUser = await User.findById(decoded.id)//extraindo usuário a partir do token. O .id foi passado em create-user-token para o token

            currentUser.password = undefined // removendo a senha

        } else {
            currentUser = null
        }
        res.status(200).send(currentUser)
    }

    static async getUserById(req, res) {

        const id = req.params.id // pegando algo da url com params
        const user = await User.findById(id).select('-password') // select é um método que vem junto com findById, seleciona o parâmetro que eu quero, nesse caso usando o - remove o parâmetro escolhido

        if (!user) {
            res.status(422).json({
                message: 'Usuário não encontrado!',
            })
            return
        }
        res.status(200).json({ user })
    }



    static async editUser(req, res) {
        const id = req.params.id

        //check if user exists
        const token = getToken(req)
        const user = await getUserByToken(token)



        const { name, email, phone, password, confirmpassword } = req.body

        let image = ''

        //validations
        if (!name) {
            res.status(422).json({ Message: "O nome é obrigatório!" })
            return
        }
        if (!email) {
            res.status(422).json({ Message: "O email é obrigatório!" })
            return
        }

        //check if email has already taken
        const userExists = await User.findOne({ email: email })

        if (user.email !== email && userExists) {
            res.status(422).json({ message: 'Utilize outro email!' })
            return
        }
        user.email = email


        if (!phone) {
            res.status(422).json({ Message: "O telefone é obrigatório!" })
            return
        }
        if (!password) {
            res.status(422).json({ Message: "A senha é obrigatória!" })
            return
        }
        if (!confirmpassword) {
            res.status(422).json({ Message: "a confirmação de senha  é obrigatória!" })
            return
        } if (password !== confirmpassword) {
            res.status(422).json({ Message: "A senha e a confirmação de senha precisam ser iguais!" })
            return
        }



    }
}
