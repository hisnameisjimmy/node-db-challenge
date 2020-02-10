
exports.seed = function(knex) {
  return knex("resources").insert([
    { resource_name: "dance book", project_id: 1 },
    { resource_name: "computer", project_id: 2 },
    { resource_name: "programming book", project_id: 2 }
  ]);
};
