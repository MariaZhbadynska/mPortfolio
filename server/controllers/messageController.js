const Mes = require("../models/messageModel")

const getMessages = async (req, res) => {
  const messages = await Mes.find()
  res.json(messages)
}

const pushMessage = async (req, res) => {
  const { name, email, subject, message } = req.body
  const mes = await Mes.create({  name, email, subject, message  })
  res.json(mes)
}
const deleteMessage = async (req, res) => {
  const { id } = req.params
  const mes = await Mes.findByIdAndDelete(id)
  res.json(mes)
}

module.exports = {
getMessages,
pushMessage,
deleteMessage
}