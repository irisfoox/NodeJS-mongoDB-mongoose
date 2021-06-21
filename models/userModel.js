const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, require, },
    password: { type: String, minlength: 8, require },
    age:{ type: Number},
    // date: { type: Date },
    products:[
        {type:mongoose.Schema.Types.ObjectId , ref:'Product'}  //same Product name as export of productModel
    ],
    blogs:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
        }
    ]
    
}) 

module.exports=mongoose.model("User",userSchema)