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

console.log('Hello World');




































 module.exports = app;
