const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

productimage: String,
productname: String,
description: String,
gender: String,
category: String,
price: Number


},{
    versionKey: false
})

const productModel = mongoose.model("product",productSchema)

module.exports={
    productModel
}


// - **Product Image Upload**
// - **Product Name**
// - **Product Description**
// - **Gender** (Select tag with Male / Female as options)
// - **Category** (Select tag with Makeup, Skincare and Haircare as options)
// - **Price**