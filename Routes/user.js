const express = require ('express');
const router = express.Router();
const auth = require("../Middleware/auth");

const userCtrl = require('../Controllers/user');

router.post("/signUp", userCtrl.signUp);
router.post("/logIn", userCtrl.logIn);

router.get ("/:id", userCtrl.getOneUser);

module.exports = router;