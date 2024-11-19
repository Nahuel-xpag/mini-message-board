const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const asyncHandler = require("express-async-handler");

// The function will automatically catch any errors thrown and call the next function
const getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getMessages();

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  };

  res.render("index", {title: "Mini Messageboard", messages: messages});
});


module.exports = { getMessages };