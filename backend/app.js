const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const blogRouter = require("./router/blogRoute");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use("/blog", blogRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log("error: ", err);
  });
