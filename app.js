var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('./config');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", require('./web'));

var port = process.env.PORT || 1333;

app.listen(port, function() {
    console.log(`App running on port: ${port}`);
});
