const conn = require('../connect');

var Category = {
    getAll:function(cb){
        return conn.query("SELECT * FROM category",cb)
    },
    create:function(data, cb){
        return  conn.query("INSERT INTO category SET ?", data,cb)
    },
    getId:function(id,cb){
         return conn.query("SELECT * FROM category;SELECT * FROM category WHERE id = ?",[id],cb)
    },
    update:function(data,id,cb){
        return conn.query("UPDATE category SET ? WHERE id = ? ",[data,id],cb)
    },
    delete:function(id,cb){
        conn.query("DELETE FROM category WHERE id = ?", [id], cb);
    }

}
module.exports = Category;