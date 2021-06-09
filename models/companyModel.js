const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name: { type: String, require },
    category: { type: String, minlength: 8, require },
    products:[
        {type:mongoose.Schema.Types.ObjectId , ref:'Product'} //same writing as product's export
    ]
    // date: { type: Date }
    
})  

module.exports=mongoose.model("Company",productSchema)