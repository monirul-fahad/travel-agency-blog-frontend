import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { name, title, img, _id, desc, time } = blog;
  return (
    <div className="blog__single-item">
      <img src={img} alt="" />
      <div className="blog__single-item__content">
        <Link to={`blogDetails/${_id}`}>
          <h3>{title}</h3>
        </Link>
        <div className="blog__single-item__content__author-details">
          <span>{name}</span>
          <span>{time}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Blog;
