const express = require("express");
const db = require("./resource-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.find()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  db.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

module.exports = router;
