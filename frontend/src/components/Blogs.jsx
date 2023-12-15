import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import axios from "axios";
import { useBlogpostStore } from "../../lib/stateManagement";

function Blogs() {
  const blogposts = useBlogpostStore((state) => state.blogs);
  const fetchBlog = useBlogpostStore((state) => state.fetchBlogs);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadBlogposts = async () => {
    setLoading(false);
    fetchBlog();
  };
  useEffect(() => {
    loadBlogposts();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        blogposts.map((blog, index) => <BlogCards key={index} blog={blog} />)
      )}
    </div>
  );
}

export default Blogs;
