import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsStarFill } from "react-icons/bs";

const Sidebar = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-peak-40927.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="sidebar">
      <div className="title blog-sidebar right-pos">
        <div className="widget widget_search">
          <form role="search" method="get" action="#" className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
                value=""
                name="s"
                required=""
              />
            </label>
            <button type="submit" className="search-submit">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </div>
        <div id="rola_cats-3" className="widget widget_rola_cats">
          <h3 className="widget-title">Category</h3>
          <ul className="cus_widget_categories">
            <li>
              <div className="flex items-center justify-between">
                <a href="#">Adventure </a>
                <a href="#">(2)</a>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <a href="#">City</a>
                <a href="#">(1)</a>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <a href="#">Destination </a>
                <a href="#">(1)</a>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <a href="#">Mountain</a>
                <a href="#">(2)</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="sidebar-blog">
          <h3 className="sidebar-blog__title">Recent Posts</h3>
          {blogs.slice(0, 4).map((blog) => (
            <div className="grid grid-cols-12 gap-4 mb-2 border-b border-b-gray-200">
              <div className="col-span-3 ">
                <img className="rounded" src={blog.img} />
              </div>
              <div className="col-span-9 text-base font-medium text-black-500">
                <h5>
                  <Link to="#">{blog.title}</Link>
                </h5>
                <p>{blog.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="quote-info-box">
          <div className="info-item">
            <div className="info-item__rating">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut arcu a
              dignissim suscipit non ac eget tellus in nisl mauris nec
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <img
              className="rounded-full w-14 h-14"
              src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/review-2.jpg"
              alt="Author Image Link"
            />
            <div>
              <h3 className="mb-2 font-bold text-java-500">Amena Bibi</h3>
              <span className="text-gray-600">Tour &amp; Travels</span>
            </div>
          </div>
        </div>
        <div className="widget_tag_cloud">
          <h3 className="">Tags</h3>
          <div className="widget_tag_cloud__wrapper">
            <a href="#">Business</a>
            <a href="#">Health</a>
            <a href="#">Privacy</a>
            <a href="#">Technology</a>
            <a href="#">Tips</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
