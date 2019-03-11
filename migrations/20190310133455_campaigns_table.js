
exports.up = function(knex, Promise) {
    return knex.schema.createTable('campaigns', function(tbl){
        tbl.increments('id').primary();
        tbl.integer('org_id').unsigned().notNullable().references('id').inTable('organizations')
        tbl.string("title", 255).notNullable().unique();
        tbl.string("cause", 255);
        tbl.string("description", 500);
        tbl.integer("cash_goal");
        tbl.integer("funds_received");
        tbl.boolean("active_campaign");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('campaigns');
};
