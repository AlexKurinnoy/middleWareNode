const express = require("express")
const articles = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Article = require("../models/Article")
articles.use(cors())

process.env.SECRET_KEY = 'secret'


articles.get('/all', (req, res) => {
    // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Article.findAll().then(аrticle => {
        if (аrticle){
            res.json(аrticle)
        }else{
            res.send('аrticle does not exist')
        }
    }).catch(err=>{
        res.send('error: ' + err)
    })
})







module.exports = articles;