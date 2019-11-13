const express = require('express');
const cors = require('cors');
let bodyParser = require('body-parser')
let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false })
    )
let Users = require("./routes/Users")
let Articles = require("./routes/Articles")

app.use("/users", Users)
app.use("/articles", Articles)

app.listen(port, function () {
    console.log("Server is running on port " + port)
})
