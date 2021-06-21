const blogRouter=require('express').Router();
const blog=require('../controlers/blogController');

blogRouter.post('/createBlog/userId',blog.createBlog);
blogRouter.delete('/deleteBlog/blogId',blog.deleteBlog);

module.exports=blogRouter;