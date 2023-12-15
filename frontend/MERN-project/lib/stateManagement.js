import axios from "axios";
import { create } from "zustand";

export const useBlogpostStore = create((set) => ({
  blogs: [],
  fetchBlogs: async () => {
    const blogData = (await axios.get("http://localhost:3001/blog")).data;
    set({ blogs: blogData });
  },
}));
