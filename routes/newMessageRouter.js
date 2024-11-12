const { Router } = require('express');

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("templates/form")
});

module.exports = newMessageRouter;