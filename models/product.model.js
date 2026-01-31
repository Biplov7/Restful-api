// const mongoose = require(mongoose);

// const ProductSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, "Please enter a Product Name"],
//     },
//     quantity: {
//         type: Number,
//         require: true,
//         default: 0,
//     },

//     price: {
//         type: Number,
//         require: true,
//         default: 0
//     },

//     image: {
//         type: String,
//         require: false,
//     }
// },
//     {
//         Timestamp: true,
//     }
// );


// const Product = mongoose.model("Product",ProductSchema);


// module.exports = Product;



const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true,"Please enter the name of the product"]
    },
    detail: {
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require:true,
        default: 0
    },
    quantity: {
        type: Number,
        require: true,
        default: 0
    },
    image: {
        type: String,
        require: false,
    }
},{
    timestamps: true,
}
);


const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;