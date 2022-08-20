const Router = require('express');
const router = Router();
const TypeController = require('../controllers/typeController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), TypeController.create);
router.get('/', TypeController.getAll);
router.delete('/', (req, res) => {

})


module.exports = router;