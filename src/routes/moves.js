const Router = require("express").Router;

const router = new Router();
const { getMoves } = require("../controllers/MovesController");

router.route("/:idCard/:typeMove")
    .get(getMoves)

module.exports = router;