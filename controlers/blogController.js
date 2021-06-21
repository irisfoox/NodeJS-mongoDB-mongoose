const Blog=require('../models/blogModel');
const User=require('../models/userModel');

const createBlog=async(req,res)=>{
    try{
        const user=await User.findById(req.params.userId)
        const myBlog=new Blog({
        title:req.body.title,
        content:req.body.content,
        userId:user_id
        })
        await myBlog.save();
        await user.blogs.push(myBlog);
        await user.save();
        res.status(200).json({blog:myBlog})

    }catch(err){
        console.log('cant save new blog',err);
    }
}
const deleteBlog=async(req,res)=>{
    try{
        const blog=await Blog.findByIdAndDelete(req.params.Blog.id)
        res.status(205).send('the blog deleted')
    }catch(err){
        console.log("cant delete blog",err);
    }
}
/*const deleteBlog = async (req,res) => {   //already deleted in blogModel
    try{
        const blog = await Blog.findById(req.params.blogId)
        // await User.findByIdAndUpdate(blog.userId, { $pull: { blogs: blog._id } })
        await blog.remove()
        res.status(200).send('the blog is deleted')
    }catch(error){
        res.send(error);
    }
}*/
module.exports={createBlog,deleteBlog};