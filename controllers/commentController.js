const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const asyncHandler = require("express-async-handler");

// The function will automatically catch any errors thrown and call the next function
const getMessageById = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  const comment = await db.getMessageById(Number(commentId));

  if (!comment) {
    throw new CustomNotFoundError("comment not found");
  }

  res.render("fullComment", { message: comment });
});


module.exports = { getMessageById };