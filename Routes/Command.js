const router = require("express").Router();
const commandCtrl = require("../Controllers/command");

router.post("/", commandCtrl.createCommand);

router.get("/:commandId", commandCtrl.getOneCommand);
router.get("/", commandCtrl.getAllCommands);
router.get("/userId/:userId", commandCtrl.getUserCommands);

module.exports = router;