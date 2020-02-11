const express = require("express");

const ProjectsRouter = require("./projects/project-router.js");
const ResourcesRouter = require("./resources/resource-router.js");
const TasksRouter = require("./tasks/task-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;
