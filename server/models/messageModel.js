const mongoose = require("mongoose")

const Schema = mongoose.Schema

const messageSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
)

const Mes = mongoose.model("mes", messageSchema)

module.exports = Mes