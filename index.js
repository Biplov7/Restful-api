const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express();
const productRoute = require('./routes/products.route.js');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes 
app.use("/api/products", productRoute);



app.get('/', (req, res) => {
    res.status(200).send("Hello from node api server");
});



mongoose.connect("mongodb+srv://biplovkhanal497_db_user:nVW19MF2mKiSkDOa@backenddb.yw2v8xr.mongodb.net/Node-API?appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed");
    });