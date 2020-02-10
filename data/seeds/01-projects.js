
exports.seed = function(knex) {
  return knex("projects").insert([
    { project_name: "Dance like a monkey", completed: false },
    { project_name: "Write heinous amounts of code", completed: true }
  ]);
};
