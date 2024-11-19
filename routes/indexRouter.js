const { Router } = require("express");
const indexRouter = Router();
const db = require('../db');
const {getMessages} =  require("../controllers/indexController");


indexRouter.get("/", getMessages);
indexRouter.post("/new", (req, res) => {
    db.addMessage(req.body.messageText, req.body.messageUser, new Date().toString().slice(0,21));
    res.redirect("/");
})

module.exports = indexRouter;