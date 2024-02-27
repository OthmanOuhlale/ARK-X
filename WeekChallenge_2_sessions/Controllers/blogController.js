const Blog = require('../Models/blogModel.js');

const blogs = Blog.getAllBlogs();

exports.getBlogsUser = (req, res) =>{
    const id_user = req.session.idUser;
    const blog = blogs.filter( b => b.idUser === id_user );
    res.send(blog);
};

exports.getAllBlogs = (req, res) =>{
    // const blogs = Blog.getAllBlogs();
    res.send(blogs);
};

exports.createBlog = (req, res) => {
    const {name, content} = escapeHtml(req.body); 
    const id_user = req.session.idUser;
    const id = blogs.length + 1;
    const newBlog = {id, name, content, id_user};
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
    const {name, content} = escapeHtml(req.body);
    Blog.updateBlog(id, name, content);
    res.send('blog updated successfully');
};