const db = require("../data/dbConfig.js");

module.exports = {
  find,
  add
};

function find() {
  return db("tasks");
}

function findById(task_id) {
  return db("tasks")
    .where({ task_id })
    .first();
}

function add(task) {
  return db("tasks")
    .insert(task)
    .then(task_id => {
      return findById(task_id[0]);
    });
}
