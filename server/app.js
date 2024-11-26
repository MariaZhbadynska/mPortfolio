const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const mesRouter = require("./routes/messageRouter")
const { URL, PORT } = require("./config/config")

const app = express()


app.use(cors())

app.use("/api/messages", mesRouter)



const main = async () => {
  try {
    await mongoose.connect(URL)
    console.log("Connected to MongoDB")

    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT} port`)
    })
  } catch (err) {
    console.log("error:", err)
  }
}

main()

process.on("SIGINT", async () => {
  await mongoose.disconnect()
  process.exit()
})
