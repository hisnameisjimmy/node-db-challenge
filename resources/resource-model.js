const db = require("../data/dbConfig.js");

module.exports = {
  find,
  add
};

function find() {
  return db("resources");
}

function findById(project_id) {
  return db("resources")
    .where({ project_id })
    .first();
}

function add(resource) {
  return  db("resources")
    .insert(resource)
    .then(project_id => {
      return findById(project_id[0]);
    });
}