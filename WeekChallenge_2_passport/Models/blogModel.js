const blogs = require('../blogs.json');


class Blog{

    static getAllBlogs(){
        return blogs;
    }

    static createBlog(newBlog){
        blogs.push(newBlog)
    }

    static updateBlog(id, name, content){
        const index = blogs.findIndex(b=>b.id === id);
        if(index !== -1){
            blogs[index].name = name;
            blogs[index].content = content;
        }
    }

    static deleteBlog(id){
        const index = blogs.findIndex(blog => blog.id === id);
        if(index !== -1){
            blogs.splice(index, 1);
        }
        // const newListBlogs = blogs.filter(blog => blog.id !== id)
        // blogs = newListBlogs;
        // res.send('blog deleted successfully');
    }
};

module.exports = Blog;
