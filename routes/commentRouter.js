const { Router } = require("express");
const { getMessageById } = require('../controllers/commentController');
const commentRouter = Router();

commentRouter.get("/:commentId", getMessageById);

module.exports = commentRouter;