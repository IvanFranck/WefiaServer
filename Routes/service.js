const router = require("express").Router();
const serviceCtrl = require("../Controllers/service");

router.get('/', serviceCtrl.getAllServices);
router.get('/:serviceId', serviceCtrl.getOneService);

router.post('/', serviceCtrl.createService);
router.post('/:serviceId', serviceCtrl.modifyService);

module.exports = router;