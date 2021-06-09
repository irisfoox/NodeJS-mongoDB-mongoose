const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, require },
    category: { type: String, minlength: 8, require },
    price:{ type: Number},
    // date: { type: Date }
    company:{type:String}
})  

module.exports=mongoose.model("Product",productSchema)