const Product =require('../models/productModel') //connection to productSchema to access fields

const newProduct=async(req,res)=>{
    let myProduct=new Product({ 
        name:req.body.name,
        category:req.body.category,
        price:req.body.price
    })
    console.log(req.body); //connection to product fields
    try{
        await myProduct.save();
        res.status(200).json({newProduct:myProduct});  //key:value
    }
    catch(error){
        res.send("cannot save new Product"+ error.message)
    }
}
const findProductById=async(req,res)=>{
    try{
        let product=await Product.findById(req.params.id);
        res.status(200).json({findProductById:product});  //key:value
    }
    catch(error){
        res.send("cannot find user"+ error.message)
    }
}
const getAllProducts=(req,res)=>{
    
        let products= Product.find().then((products)=>{
        res.status(205).json({getAllProducts:products}); 
    }).catch((err)=>{
        console.log("cannot find Products "+err.message);
    })
    }
const getAllProducts1=async(req,res)=>{
     try{
         let products=Product.find()
         res.status(206).json({getAllProducts1:products});
         console.log(products);

     }catch{(err)=>{
         console.log("cant find products "+err.message)
     }
    }    
}
const getAllProducts2=(req,res)=>{
    let products=Product.find({},function (err,products) {
        if(err){
           res.status(405).send("err: "+err)
        }else{
           res.status(200).json({getAllProducts2:products})
           console.log({getAllProducts2:products});
        }
    })
}

const updateById=(req,res)=>{
        
            let product=Product.findByIdAndUpdate(req.params.id,{name:req.body.name})
            .then((product)=>{
                res.json({updateById:product})
            }).catch((err)=>{console.log("not updated "+err)})
    }
const updateByPrice=(req,res)=>{     //update 2 fields by $set:
    let product=Product.findOneAndUpdate({price:req.body.price},{$set:{name:req.body.name ,category:req.body.category}}) 
    .then((product)=>{
        res.status(207).json({updateByPrice:product})
    }).catch((err)=>{console.log("error "+err);})

}

const findProductByName=(req,res)=>{
    let product=Product.findOne({name:req.body.name},function(err,product) {
        if(err)
        res.status(400).send("my err "+err);
        else 
        res.status(200).json({findProductByName:product});
    })
}
const updateOne=(req,res)=>{
    Product.findOneAndUpdate({name:req.body.name},{ password: req.body.password })
    .then((product)=>{
         res.json({updateOne:product})
    }).catch((err)=>{
        res.send("cannot find product: "+err.message)
    })
}
const updateWhole=(req,res)=>{
    Product.findOneAndUpdate({name:req.body.name},
        {$set:{category:req.body.category , price:req.body.price}}).then((product)=>{
            res.json({updateWhole:product})
        }).catch((err)=>{console.log("err "+err);})
}
const deleteProductById=async(req,res)=>{
    try{
        let product= await Product.findByIdAndDelete(req.params.id)
        res.send('delete product'+product)

    }
    catch(err){
        res.send('cant find Product '+err)
    }
}   
const deleteOne=(req,res)=>{
    Product.findOneAndDelete({name:req.body.name}).then((product)=>{
       res.json({success:product})
    }).catch((err)=>{
        res.send(err);
    })
}

module.exports={newProduct,findProductById,getAllProducts,getAllProducts1,getAllProducts2,updateById,updateByPrice,findProductByName,updateOne,updateWhole,deleteProductById,deleteOne}
