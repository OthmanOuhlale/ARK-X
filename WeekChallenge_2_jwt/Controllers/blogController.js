const Blog = require('../Models/blogModel.js');

const blogs = Blog.getAllBlogs();

exports.getAllBlogs = (req, res) =>{
    // const blogs = Blog.getAllBlogs();
    res.send(blogs);
};

exports.createBlog = (req, res) => {
    const {name, content} = req.body;
    const id = blogs.length + 1;
    const newBlog = {id, name, content};
    Blog.createBlog(newBlog);
    // res.send(`Blog created successfully\n`);
    res.status(201).json(newBlog);
};

exports.deleteBlog = (req, res) => {
    const id = parseInt(req.params.id);
    Blog.deleteBlog(id);
    res.send('blog deleted successfully');
};

exports.updateBlog = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, content} = req.body;
    Blog.updateBlog(id, name, content);
    res.send('blog updated successfully');
};