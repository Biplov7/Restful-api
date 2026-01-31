const express = require("express");
const router = express.Router();
const { getProducts, postProduct, getProductById,updateProduct,deleteProduct } = require("../controller/proudcts.controller.js");


router.get('/',getProducts);

router.post('/',postProduct);   

router.get('/:id', getProductById);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;