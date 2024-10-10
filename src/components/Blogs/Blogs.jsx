import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({hadleAddtoBookmark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('cafe.json')
        .then(res => res.json())
        .then (data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl font-bold p-4">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                hadleAddtoBookmark={hadleAddtoBookmark}
                handleReadingTime ={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;