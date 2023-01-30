module.exports = function(server){
    server.get('/admin',function(req,res){
        // console.log(req.session.login);
        res.render('admin/index');
    })
   
}