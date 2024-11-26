const express = require("express");
const {
  getMessages,
  pushMessage,
  deleteMessage,
} = require("../controllers/messageController");
const jsonParser = express.json();

const messageRouter = express.Router();

messageRouter.get("/", getMessages);
messageRouter.post("/", jsonParser, pushMessage);
messageRouter.delete("/:id", jsonParser, deleteMessage);

module.exports = messageRouter;
