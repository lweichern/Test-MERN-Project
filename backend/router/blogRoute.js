const express = require("express");
const blogRouter = express.Router();
const Blog = require("../models/blogModel");

// GET ALL
blogRouter.get("/", async (req, res) => {
  // res.send({success: true, route: "blog"})
  const blogs = await Blog.find({});

  res.status(200).json(blogs);
});

// GET BY ID
blogRouter.get("/:blogId", async (req, res) => {
  const { blogId } = req.params;
  const found = await Blog.findById(blogId);

  res.status(200).json(found);
});

// CREATE
blogRouter.post("/", async (req, res) => {
  const { title, description, image_source, categories } = req.body;

  const newBlog = await Blog.create({
    title,
    description,
    image_source,
    categories,
  });

  res.status(201).json(newBlog);
});

// UPDATE
blogRouter.patch("/:blogId", async (req, res) => {
  const { blogId } = req.params;

  console.log("body: ", req.body);

  // new set to true to return updated model
  const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, {
    new: true,
  });

  res.status(200).json(updatedBlog);
});

// DELETE
blogRouter.delete("/:blogId", async (req, res) => {
  const { blogId } = req.params;

  const found = await Blog.findByIdAndDelete(blogId);

  if (!found) {
    res.json({ message: "No record found" });
  }

  res.status(200).json(found);
});

module.exports = blogRouter;
