let express = require('express');
let app = express();
let htmlPath = __dirname + '/views'
let cssPath = __dirname + '/public'

//const pathMiddleware = (req, res, next) => {
//    express.static(absoluteCssPath);
  //  next();
//}
//
//app.use(pathMiddleware)

//app.use('/public', express.static(cssPath))
app.use('/public', express.static(cssPath))

app.get('/', (req, res) => {
    res.sendFile(htmlPath + '/index.html')
})

console.log('Hello World');




































 module.exports = app;
