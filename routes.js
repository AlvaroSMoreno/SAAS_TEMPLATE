const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

router.get('/', (req, res) => {
    res.render('pages/landing');
});


module.exports = router;