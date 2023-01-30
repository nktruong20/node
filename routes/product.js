const upload = require('../upload');
const conn = require('../connect');
const ProductController = require('../controllers/ProductController');

module.exports = function(server){
    server.get('/admin/product',ProductController.index);
    server.get('/admin/product/create',ProductController.create);
    server.post('/admin/product/create',upload.single('myfile'),ProductController.store);

    server.get('/admin/product/edit/:id',ProductController.edit);
    server.post('/admin/product/update/:id',upload.single('myfile'),ProductController.update);
    server.get('/admin/product/delete/:id',ProductController.delete);
}