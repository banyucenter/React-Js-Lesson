import React from 'react';
import './css/Blog.css';

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/tech"/>
        <p>{props.date}</p>
        <p><h2>{props.judul}</h2></p>
        <p>W3Schools is optimized for learning, 
        testing, and training. 
        Examples might be simplified to improve reading and basic understanding. 
        Tutorials, references, and examples are constantly reviewed to avoid errors</p>
    </div>
}

export default Blog;