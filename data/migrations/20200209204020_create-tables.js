
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id')
        tbl.string('project_name', 128)
            .notNullable()
        tbl.text('description', 500)
        tbl.boolean('completed');
    })

    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string("resource_name", 128)
            .notNullable();
        tbl.text('description', 500)
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects");
    })

    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.text('description', 500)
            .notNullable()
        tbl.text('notes', 300)
        tbl.boolean('completed');
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects");
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
