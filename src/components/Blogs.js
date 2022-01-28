import React, { useEffect, useState } from "react";
import Blog from "../common/Blog";
import Pagination from "./Pagination";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://mysterious-peak-40927.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="blogs">
      <h2>Traveler's experience and blogs</h2>
      <div className="blog">
        {currentPosts.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
        <div className="container">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={blogs.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
