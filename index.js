const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const courseCategoryName = require("./data/course-categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send(courses);
});

app.get("/course_category", (req, res) => {
  res.send(courseCategoryName);
});

app.get("/course-item/course-details/:id", (req, res) => {
  const id = req.params.id;
  const allCourses = courses.filter((course) => course.course_id === id) || {};
  res.send(allCourses);
});

app.get("/course-content/:id", (req, res) => {
  const id = req.params.id;
  const coursesId = courses.find((courseId) => courseId._id === id) || {};
  res.send(coursesId);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
