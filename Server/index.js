const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
const data = require("./data.json")

app.get("/", cors(), async (req, res) => {
	res.send(data)
})
app.get("/home", cors(), async (req, res) => {
	res.send(data)
})


app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})