const express = require("express")
const {productModel} = require("../model/product.model")
const jwt = require("jsonwebtoken")

const productRouter =  express.Router()



productRouter.post("/add", async(req,res)=>{
    try{
        const product = new productModel(req.body)
        await product.save()
        res.status(200).send({"msg":"A new product has been added"})
    }
    catch(err){
       res.status(400).send({"error":err})
    }
})

productRouter.get("/products", async(req,res) => {
    const {category} = req.query;
    try{
        if(category){
            const products=await productModel.find({category})
            res.status(200).send(products)
        }else{
            const products=await productModel.find()
            res.status(200).send(products)

        }
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})

productRouter.patch("/update/:productID", async(req,res) => {
    const {productID} = req.params
    try{
        
            let data = await productModel.findByIdAndUpdate({_id:productID},req.body) 
            res.status(200).send({"msg":`Product with ID:${productID} has been updated`, data})
       
    }
    catch(err){
        console.log(err)
        res.status(400).send({"error":err})
    }
})
 
productRouter.delete("/delete/:productID", async(req,res) => {
    const {productID} = req.params
    try{
        
            await productModel.findByIdAndDelete({_id:productID}) 
            res.status(200).send({"msg":`Product with ID:${productID} has been deleted`})
       
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})


module.exports={
    productRouter
}