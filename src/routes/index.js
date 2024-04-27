const Router = require("express").Router;

const router = new Router();

router.get("/test", (req, res) => {
    const data = {
        message: "Hello World"
    };

    res.status(200).json(data)
});

module.exports = router;