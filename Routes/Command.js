const router = require("express").Router();
const commandCtrl = require("../Controllers/command");

router.post("/", commandCtrl.createCommand);

router.get("/:commandId", commandCtrl.getOneCommand);
router.get("/", commandCtrl.getAllCommands);

module.exports = router;