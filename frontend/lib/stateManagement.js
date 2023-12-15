import axios from "axios";
import { create } from "zustand";

export const useBlogpostStore = create((set) => ({
  blogs: [],
  fetchBlogs: async () => {
    const blogData = (
      await axios.get("https://mern-backend-p7rt.onrender.com/blog")
    ).data;
    set({ blogs: blogData });
  },
}));
