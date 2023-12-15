import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useBlogpostStore } from "../../lib/stateManagement";

function BlogCards({ blog }) {
  const fetchBlog = useBlogpostStore((state) => state.fetchBlogs);
  const deleteBlog = async () => {
    await axios.delete(
      `https://mern-backend-p7rt.onrender.com/blog/${blog._id}`
    );
    fetchBlog();
  };

  return (
    <div className="flex flex-col gap-2">
      <img src={blog.image_source} alt="blog image" />
      <pre>{blog._id}</pre>
      <h3 className=" text-2xl">{blog.title}</h3>
      <p>{blog.description}</p>
      <div className="flex gap-2">
        {blog.categories.map((category, index) => (
          <p key={index} className=" bg-blue-600 w-fit rounded-lg p-1">
            {category}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`/blog/${blog._id}`}>
          <button className="bg-blue-400 rounded px-2 w-full hover:bg-blue-500">
            Read
          </button>
        </Link>

        <button
          className="bg-red-400 rounded px-2 hover:bg-red-500"
          onClick={deleteBlog}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogCards;
