import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar";
import { RiDeleteBin7Line } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-peak-40927.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://mysterious-peak-40927.herokuapp.com/blogs/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = setBlogs.filter((event) => event._id !== id);
          setBlogs(remaining);
        }
      });
    alert("you have deleted a blog");
  };

  return (
    <div className="dashboard-content">
      <div className="md:col-span-2 hidden md:block">
        <AdminSidebar />
      </div>
      <div className="md:col-span-10 col-span-12 pr-3">
        <div className="grid grid-cols-12 gap-4">
          {blogs.map((blog) => (
            <div className="md:col-span-3 col-span-6 p-3 shadow-lg">
              <img
                src={blog.img}
                alt=""
                className="w-full h-60 object-cover rounded	"
              />
              <h4 className="mt-3">{blog.title}</h4>
              <p>Posted by {blog.name}</p>
              <ul className="flex gap-4 justify-center mt-4">
                <li>
                  <GrView className="text-4xl bg-java hover:bg-java-600 p-2 rounded cursor-pointer" />
                </li>
                <li>
                  <FiEdit className="text-4xl bg-java hover:bg-java-600 p-2 rounded cursor-pointer" />
                </li>
                <li>
                  <RiDeleteBin7Line
                    onClick={() => handleDelete(blog._id)}
                    className="text-4xl bg-java hover:bg-red-600 p-2 rounded cursor-pointer"
                  />
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
