
exports.up = function(knex, Promise) {
    return knex.schema.createTable('donations', function(tbl){
        tbl.increments('id').primary();
        tbl.integer('campaign_id').unsigned().notNullable().references('id').inTable('campaigns').onUpdate('CASCADE')
        tbl.integer('donor_id').unsigned().notNullable().references('id').inTable('donors').onUpdate('CASCADE')
        tbl.integer('amount').notNullable();
        tbl.string("notes", 500);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('donations');
};
