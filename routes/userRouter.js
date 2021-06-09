const userRouter=require("express").Router();
const user=require("../controlers/userController"); //all user functions

userRouter.post('/newUser',user.newUser);
userRouter.get('/findUserById/:id',user.findUserById);
userRouter.get('/getAllUsers',user.getAllUsers);
userRouter.patch('/updateById',user.updateById);
userRouter.get('/findUserByName',user.findUserByName);
userRouter.patch('/updateOne',user.updateOne);
userRouter.delete('/deleteUserById',user.deleteUserById);
userRouter.delete('/deleteOne',user.deleteOne);
module.exports=userRouter;
