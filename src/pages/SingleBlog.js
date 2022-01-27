import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../common/CommonBanner";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);

  const exactData = blogs.filter((td) => td._id === id);
  return (
    <>
      <CommonBanner />
      <div className="single-blog">
        <h3>This is blog of {exactData[0]?.title}</h3>
      </div>
    </>
  );
};

export default SingleBlog;
