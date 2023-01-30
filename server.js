const express = require('express');
const bodyParser = require('body-parser');
const ejs =require('ejs');
const session = require('express-session');

const server = express();
server.use(session({
    secret:'bkap-session',      
    resave:true,
    saveUninitialized:false
}));
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.use(express.static('public'));
server.set('view engine','html');
server.engine('html',ejs.renderFile);
require('./routes/home')(server);
require('./routes/login')(server);

server.use(function(req, res, next) {
    if (!req.session.login) {
        res.redirect('/admin/login');
    } else {
        server.locals.name = req.session.login.name;
    }

    next();
})
require('./routes/admin')(server);
require('./routes/category')(server);
require('./routes/product')(server);


server.listen(3000,function(){
    console.log('http://localhost:3000');
})