const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs',
    multipleStatements:true
})
conn.connect();
module.exports=conn;