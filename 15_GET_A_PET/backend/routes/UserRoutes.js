import Router from 'express'
import UserController from '../controllers/UserController.js'

const router = Router.Router()

//middleware
import verifytoken from '../helpers/verify-token.js'


router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
router.get('/:id', UserController.getUserById)
router.patch('/edit/:id', verifytoken, UserController.editUser)//ira fazer a análise do token na rota antes de passar pra frente





export default router