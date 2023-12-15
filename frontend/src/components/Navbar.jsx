import axios from "axios";
import React from "react";
import { useBlogpostStore } from "../../lib/stateManagement";

function Navbar() {
  const fetchBlog = useBlogpostStore((state) => state.fetchBlogs);
  const addBlog = async () => {
    await axios.post("https://mern-backend-p7rt.onrender.com/blog", {
      title: "Finance your way to Fast Fasion",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image_source:
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      categories: ["Fashion", "Finance"],
    });

    fetchBlog();
  };
  return (
    <nav className="flex justify-between bg-blue-800 p-2">
      <h1 className="  text-3xl">Blogs!</h1>
      <button
        className=" bg-white rounded text-blue-800 px-2 hover:bg-slate-200"
        onClick={addBlog}
      >
        Add Blog +
      </button>
    </nav>
  );
}

export default Navbar;
