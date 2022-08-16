const Router = require('express');
const router = Router();
const brandController = require('../controllers/brandController');

router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.delete('/', (req, res) => {

})


module.exports = router;