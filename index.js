const express = require('express');
const cors = require('cors');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './img'
});
const bodyParser = require("body-parser");

let app = express();
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/static', express.static('img'));


app.post('/upload', multipartMiddleware, (req, res) => {
    res.send(
        {"uploaded": true,
        "url":'http://localhost:3000/static/'+(req.files.upload.path).substr(4)}
);
    console.log(req.files)
 });





app.listen(port, function () {
    console.log("Server is running on port " + port)
})
