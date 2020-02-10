
exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      description: "Need to understand monkey dancing behavior",
      project_id: 1,
      completed: true
    },
    {
      description: "Figure out video setup for filming the dance",
      notes: "Goal is to look super dumb",
      completed: false,
      project_id: 1
    },
    {
      description: "Learn to all the coding stuff",
      completed: false,
      project_id: 2
    }
  ]);
};
