const joi = require('joi');
var Product  = require('../Models/product');
var Category = require('../Models/category');
var upload = require('../upload');
var ProductController = {
    index:function(req, res) {
        Product.getAll(function(err, data) {
            res.render('admin/product',{
                products : data
            })
        })
    },
    create:function(req,res){
        Category.getAll(function(err,data){
            res.render('admin/product/create',{
                cats:data
            });
        })
    },
    store:function(req, res) {    
        req.body.myfile = req.file.filename;
        Product.create(req.body, function(err) {
            res.redirect('/admin/product');
        })
    },
    edit:function(req,res){
        var id = req.params.id;
        Product.getId(id,function(err,data){
            res.render('admin/product/edit',{
                product:data.length > 0 ?data[0]:[],
                productEdit :data.length > 1 && data[1].length > 0 ? data[1][0]:{}
            })
        })
      
    },
    update:function(req,res){
        req.body.myfile = req.file.filename;
        var id = req.params.id;
        Product.update(req.body,id,function(err){
            res.redirect('/admin/product')
        })
    },
    delete:function(req,res){
        var id = req.params.id;
        Product.delete(id,function(err){
            res.redirect('/admin/product');
        })
    }
}





module.exports = ProductController;