// dependencies
const express = require('express');
const faker = require('faker');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const favicon = require('serve-favicon');

const app = express();

// db connection
const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'joinusDB'
});

db_connection.connect();

db_connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  db_connection.end();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//middle ware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', function(req, res) {
    res.render('index');
})

const app_port = 8200;
app.listen(app_port, function() {
    console.log(`Listening on port ${app_port}...`);
});