const User =require('../models/userModel') //connection to userSchema to access fields

const newUser=async(req,res)=>{
    let myUser=new User(req.body) //connection to User fields
    try{
        await myUser.save();
        res.status(200).json({newUser:myUser});  //key:value
    }
    catch(error){
        res.send("cannot save new user"+ error.message)
    }
}
const findUserById=async(req,res)=>{
    try{
        let user=await User.findById(req.params.id);
        res.status(200).json({getUserById:user});  //key:value
    }
    catch(error){
        res.send("cannot find user"+ error.message)
    }
}
const getAllUsers=(req,res)=>{
    
        let users= User.find().then((users)=>{
        res.status(205).json({getAllUsers:users}); 
    }).catch((err)=>{
        console.log("cannot find users "+err.message);
    })
    }
const updateById=(req,res)=>{
        
            let user=User.findByIdAndUpdate(req.params.id,{name:req.body.name})
            .then((user)=>{
                res.json({updateById:user})
            }).catch((err)=>{console.log("not updated "+err)})
    }

const findUserByName=(req,res)=>{
    let user=User.findOne({name:req.body.name},function(err,user) {
        if(err)
        res.status(400).send("my err "+err);
        else 
        res.status(200).json({user:user});
    })
}
const updateOne=(req,res)=>{
    User.findOneAndUpdate({name:req.body.name},{ password: req.body.password })
    .then((user)=>{
         res.json({updateOne:user})
    }).catch((err)=>{
        res.send("cannot find user: "+err.message)
    })
}
const deleteUserById=async(req,res)=>{
    try{
        let user= await User.findByIdAndDelete(req.params.id)
        res.send('delete user'+user)

    }
    catch(err){
        res.send('cant find user '+err)
    }
}   
const deleteOne=(req,res)=>{
    User.findOneAndDelete({age:req.body.age}).then((user)=>{
       res.json({success:user})
    }).catch((err)=>{
        res.send(err);
    })
}
module.exports={newUser,findUserById,getAllUsers,updateById,findUserByName,updateOne,deleteUserById,deleteOne}
    //to export function/obj containing a few func