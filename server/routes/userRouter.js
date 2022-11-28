const Router = require('express')
const router = Router()
const userController = require('../controllers/userController')
const authMiddware = require('../middleware/authMiddleware')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddware, userController.checkAuthorization) 

module.exports = router