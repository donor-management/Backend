
exports.up = function(knex, Promise) {
    return knex.schema.createTable('organizations', function(tbl){
        tbl.increments('id').primary();
        tbl.string("username", 255).notNullable().unique();;
        tbl.string("password", 500).notNullable();
        tbl.string("email", 255).notNullable();
        tbl.string("org_name", 255).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('organizations');
};
