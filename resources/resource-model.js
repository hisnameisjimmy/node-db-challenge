const db = require("../data/dbConfig.js");

module.exports = {
  find,
  add
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function add() {
  db("resources")
    .insert(resource)
    .then(ids => {
      return findById(ids[0]);
    });
}