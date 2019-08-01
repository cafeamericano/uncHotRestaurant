//SERVER PORT NUMBER================================================================

let port = process.env.PORT || 8080

//REQUIREMENTS================================================================

var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var app = express()
var handlebars = require('express-handlebars')
var path = require('path')

//ROUTES================================================================

//Force redirection to login route
app.get('/', function (req, res) {
    res.render('login')
});

//START SERVER================================================================

app.listen(port, function () {
    console.log(`Server listening on Port ${port}...`)
})