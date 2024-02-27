const express = require('express');
const { getAllBlogs, createBlog, deleteBlog, updateBlog, getBlogsUser } = require('../Controllers/blogController')

const blogRouter = express.Router();

blogRouter.get('/blogUser', getBlogsUser);
blogRouter.get('/', getAllBlogs);
blogRouter.post('/', createBlog);
blogRouter.delete('/:id', deleteBlog);
blogRouter.put('/:id', updateBlog);

module.exports = blogRouter;