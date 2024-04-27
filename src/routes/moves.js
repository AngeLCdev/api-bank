const Router = require("express").Router;

const router = new Router();
const { getMoves, setMoves } = require("../controllers/MovesController");

router.route("/:idCard/:typeMove")
    .get(getMoves)
    .post(setMoves);

module.exports = router;