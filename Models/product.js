const conn = require('../connect');

var Product = {
    getAll:function(cb){
        return conn.query("SELECT p.*, c.name as cat_name  FROM products p JOIN category c ON p.category_id = c.id Order By p.id DESC",cb)
    },
    create:function(data,cb){
        return conn.query("INSERT INTO products SET ?",data,cb)
    },
    getId:function(id,cb){
        return conn.query("SELECT p.*, c.name as cat_name,c.id as cat_id FROM products p JOIN category c ON p.category_id = c.id;SELECT * FROM products WHERE id = ? ",[id],cb)
    },
    update:function(data,id,cb){
        return conn.query("UPDATE products SET ? WHERE id = ? ",[data,id],cb);
    },
    delete:function(id,cb){
        return conn.query("DELETE FROM products WHERE id = ? ",[id],cb);
    }

}
module.exports = Product;