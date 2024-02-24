import React from 'react'
import posts from '../data/posts';
import { NavLink } from 'react-router-dom';
const Blog = () => {

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => {
           return <li key={post.id}><NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink></li>
           
        })}
      </ul>
    </>
  );
};

export default Blog;
