const joi = require('joi');
var Category = require('../Models/category');

var CategoryController = {
    index:function(req,res){
        Category.getAll(function(err,data){
            res.render('admin/category/index',{
                cats : data
            })
        })
    },
    create:function(req,res){
        res.render('admin/category/create',{
            errors:null
        });
    },
    store:function(req,res){
        schema = joi.object().keys({
            name:joi.string().required().min(2).messages({
                "string.empty":"Tên danh mục không trống",
                "string.min":"Tên danh mục dài hơn 2 kí tự"
            }),
            status:joi.number().required().messages({
                "number.empty":"trạng thái không được để trống"
            })
        });
        const {error} = schema.validate(req.body)

        if(error){
           res.render('admin/category/create',{
                errors:error.details
           });
        }else{
            Category.create(req.body,function(err,data){
                if(err) return new Error("Loi"+err.sqlMessage);
                res.redirect('/admin/category')
            })
        }


       
    },
    edit:function(req,res){
        var id = req.params.id;
        Category.getId(id,function(err,data){
            res.render('admin/category/edit',{
                cats : data.length > 0 ? data[0] : [],
                catEdit : data.length > 1 && data[1].length > 0 ? data[1][0] :{}
            })
        })
    },
    update:function(req,res){
        var id = req.params.id;
        Category.update(req.body,id,function(err,data){
            res.redirect('/admin/category');
        })
    },
    delete:function(req,res){
        var id = req.params.id;
        Category.delete(id,function(err,data){
            res.redirect('/admin/category');
        })
    }


}
module.exports = CategoryController;