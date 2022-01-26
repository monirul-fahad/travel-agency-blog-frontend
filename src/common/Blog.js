import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="blog__single-item">
      <img src={blog.img} alt="" />
      <div className="blog__single-item__content">
        <Link>
          <h3>{blog.title}</h3>
        </Link>
        <div className="blog__single-item__content__author-details">
          <span>{blog.name}</span>
          <span>{blog.time}</span>
        </div>
        <p>{blog.desc}</p>
      </div>
    </div>
  );
};

export default Blog;
