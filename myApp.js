let dotenv = require('dotenv').config()
let express = require('express');
let app = express();
let htmlPath = __dirname + '/views'
let cssPath = __dirname + '/public'

app.use('/public', express.static(cssPath))

app.get('/', (req, res) => {
    res.sendFile(htmlPath + '/index.html')
})



app.get('/json', function (req, res)  {
    let mesage = 'Hello json'
    let upperCase = process.env.MESSAGE_STYLE
    if (upperCase === "uppercase") {
        res.json({"message": mesage.toUpperCase()})
    } else {
        res.json({"message": mesage})
    //res.send(process.env.MESSAGE_STYLE)
    }
})

app.get('/users', function (req, res)  {
    let ownerMessage = 'Hello boss'
    let questMessage = 'Hello quest'
    let owner = process.env.OWNER
    let name = req.query.user
    if (name === owner) {
        res.json(ownerMessage)
    } else {
        res.json(questMessage)
    //res.send(process.env.MESSAGE_STYLE)
    }
})

const words = ['hello', 'world']

app.get('/words', function (req, res) {


    res.send(words.join(' '))
      
    })
        


console.log('Hello World');




































 module.exports = app;
