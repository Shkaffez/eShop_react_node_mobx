const Router = require('express');
const router = Router();
const TypeController = require('../controllers/typeController');

router.post('/', TypeController.create);
router.get('/', TypeController.getAll);
router.delete('/', (req, res) => {

})


module.exports = router;