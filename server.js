var express = require('express')
var app = express()


app.get('/', function(req, res) { 
    res.send('Hello World! This is my simple application')
})

app.listen(3000, () => {
    console.log("Server is live at port 3000");
}) 