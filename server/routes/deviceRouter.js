const Router = require('express');
const router = Router();
const DeviceController = require('../controllers/deviceController');

router.post('/', DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);
router.delete('/', (req, res) => {

})


module.exports = router;