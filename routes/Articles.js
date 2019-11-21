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


articles.post('/update', (req, res) => {

    const data_time = new Date();
    const userData = {
        id: req.body.id,
        article: req.body.article,
        author: req.body.author,
        section: req.body.section,
        tag: req.body.tag,
        title: req.body.title,
        data_time: data_time
    }
    console.log(userData);


    Article.update( userData,
        {where: { id: userData.id}}).then(() => {
        console.log("Done");
        res.json({ "ok": "okay"})
      }).catch(err=>{
        res.send('error: ' + err)
    })
})

articles.post('/add', (req, res) => {

    const data_time = new Date();
    const userData = {
        id: req.body.id,
        article: req.body.article,
        author: req.body.author,
        section: req.body.section,
        tag: req.body.tag,
        title: req.body.title,
        data_time: data_time
    }
    console.log(userData);


    Article.create(userData).then(() => {
        console.log("Done");
        res.json({ "ok": "okay"})
      }).catch(err=>{
        res.send('error: ' + err)
    })
})

articles.post('/delete', (req, res) => {

    const data_time = new Date();
    const userData = {
        id: req.body.id,
        article: req.body.article,
        author: req.body.author,
        section: req.body.section,
        tag: req.body.tag,
        title: req.body.title,
        data_time: data_time
    }
    console.log(userData);


    Article.destroy( {where: { id: userData.id}}).then(() => {
        console.log("Done");
        res.json({ "ok": "okay"})
      }).catch(err=>{
        res.send('error: ' + err)
    })
})

module.exports = articles;