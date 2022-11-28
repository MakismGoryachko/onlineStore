const Router = require('express')
const router = Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', deviceController.getAll)
router.post('/', checkRole("ADMIN"), deviceController.create)
router.get('/:id', deviceController.getOne)


module.exports = router