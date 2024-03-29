const express = require('express');
const { getAllBlogs, createBlog, deleteBlog, updateBlog } = require('../Controllers/blogController')

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/', createBlog);
blogRouter.delete('/:id', deleteBlog);
blogRouter.put('/:id', updateBlog);

module.exports = blogRouter;