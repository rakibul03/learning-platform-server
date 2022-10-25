const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategory = require("./data/course-categories.json");

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/course_category", (req, res) => {
  res.send(courseCategory);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
