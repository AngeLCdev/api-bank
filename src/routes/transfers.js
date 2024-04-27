const Router = require("express").Router;

const router = new Router();
const { setTransfer } = require("../controllers/TransfersController");

router.route("/:idCard")
    .post(setTransfer);

module.exports = router;