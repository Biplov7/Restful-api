const Product = require("../models/product.model.js");

const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const postProduct = async (req, res) => {
    try {
        const product =  await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(501).json({message: error.message});
    }
}

const getProductById = async (req,res)=>{
    try {
        const {id} = req.params;
        const products = await Product.findById(id); 
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateProduct = async (req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req,res)=>{
    const {id} = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id)

    if(!deleteProduct){
        return res.status(404).json({message: "Product not found"});
    }

    res.status(200).json({message: `Product with ${id} deleted successfully`});
}

module.exports = {
    getProducts,postProduct,getProductById,updateProduct,deleteProduct
};