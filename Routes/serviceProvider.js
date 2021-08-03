const router = require("express").Router();
const serviceProviderCtrl = require ("../Controllers/serviceProviser");

router.post("/logIn", serviceProviderCtrl.logIn);
router.post("signUp", serviceProviderCtrl.signUp);

router.get("/:serviceProviderId", serviceProviderCtrl.getOneServiceProvider);
router.get("/", serviceProviderCtrl.getAllServiceProviders);

module.exports = router;