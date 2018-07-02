// - - - - = = = = Dependencies = = = = - - - - 
const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const favicon = require('serve-favicon');
const faker = require('faker');
const app = express();

// - - - - = = = = Database Connection = = = = - - - - 
const db_connection = mysql.createConnection(config.database);
db_connection.connect(() => console.log('* * * DB connection open * * *'));
let q = 'SELECT CURTIME() AS TIME, CURDATE() AS date, NOW() as now';
db_connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].date);
    console.log(results);
  });
db_connection.end(() => console.log('* * * DB connection closed * * *'));

// - - - - = = = = Middleware = = = = - - - - 
app.use(session( config.session ));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// - - - - = = = = Controllers = = = = - - - - 
const userController = {
    index: (request, response) => {
  
    },
    getOne: (request, response) => {

    },
    create: (request, response) => {
  
    },
    edit: (request, response) => {

    },
    delete: (request, response) => {

    }
  };

const route = {
    home: (request, response) => {
        response.render('index');
    }
};

// - - - - = = = = Routes = = = = - - - - 
app 
    .get('/api/user', userController.index)
    .post('/api/user', userController.create)
    .get('/api/user/:id', userController.getOne)
    .put('/api/user/:id', userController.edit)
    .delete('/api/user/:id', userController.delete)
    .get('/', route.home)
    .all("*", (req,res,next) => {
        res.render('towel');
});

app.listen(config.server.port, () => console.log(`Express server listening on port ${config.server.port}`));