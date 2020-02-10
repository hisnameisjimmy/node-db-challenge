const db = require("../data/dbConfig.js");

module.exports = {
  find,
  add
};

function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function add() {
  db("tasks")
    .insert(task)
    .then(ids => {
      return findById(ids[0]);
    });
}
