const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');
const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
};
const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/imagens/', productController.listProductImages);
router.get('/',productController.getProducts);
router.get('/:linhasPorPagina/:pagina', productController.listProducts);
router.post('/', upload.single('productImage'), productController.createProduct);
router.get('/:id',productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;