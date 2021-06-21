const mongoose=require('mongoose');
const User=require('./userModel');

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    contenet:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
blogSchema.pre('remove',async function (next) {
    console.log('blog deleted')
    await User.findByIdAndUpdate(this.userId,{$pull:{blogs:this._id}})
    next()
})
module.exports=mongoose.model('Blog',blogSchema);