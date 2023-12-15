import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDetails = (
        await axios.get(`http://localhost:3001/blog/${blogId}`)
      ).data;

      setBlog(blogDetails);
    };

    fetchBlog();
  }, []);
  return (
    <section>
      {Object.keys(blog).length !== 0 ? (
        <div>
          <h2 className="text-2xl">BlogDetails</h2>
          <img src={blog.image_source} alt="blog image" />
          <h3 className=" text-2xl">{blog.title}</h3>
          <p>{blog.description}</p>
          <div className="flex gap-2">
            {/* {blog.categories.map((category, index) => (
                <p key={index} className=" bg-blue-600 w-fit rounded-lg p-1">
                    {category}
                </p>
                ))} */}
          </div>
        </div>
      ) : (
        <div>Loading Blog Details...</div>
      )}
    </section>
  );
}

export default BlogDetails;
