
exports.up = function(knex, Promise) {
    return knex.schema.createTable('donors', function(tbl){
        tbl.increments('id').primary();
        tbl.string("name", 255).notNullable().unique();
        tbl.string("email", 255).notNullable();
        tbl.date("last_contact");
        tbl.integer("total_donations");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('donors');
};
