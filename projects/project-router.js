const express = require("express");
const db = require("./project-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  db.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

module.exports = router;