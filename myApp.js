let dotenv = require('dotenv').config()
let express = require('express');
let app = express();
let htmlPath = __dirname + '/views'
let cssPath = __dirname + '/public'

const functionMiddleware = (req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
}

/*const getTime = (req, res, next) => {
        req.user = getTheUserSync();  // Hypothetical synchronous operation
        next();
      };*/

  app.use(functionMiddleware)
  //app.use('/now', getTime)
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

function getTime() {
    return new Date().toString();
}

app.get ('/:word/echo', (req, res) => {
    let word = req.params.word
    res.json({echo: word})
})

app.get('/now', function(req, res, next) {
    req.time = getTime();
    next();
}, 

function(req, res) {
    res.json({time: req.time})
})

const words = ['hello', 'world']

app.get('/words', function (req, res) {

    res.send(words.join(' '))
      
    })
        
console.log('Hello World');




































 module.exports = app;
