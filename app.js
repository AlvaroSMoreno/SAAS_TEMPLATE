const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const sessions = require('express-session');
const cookieParser = require("cookie-parser");
//const stripe = require('stripe')(process.env.STRIPE_SK);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "qwerty1234",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(cookieParser());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Service running on PORT: ${PORT}`);
});