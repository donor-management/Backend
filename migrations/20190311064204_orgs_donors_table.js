
exports.up = function(knex, Promise) {
    return knex.schema.createTable('org_donors', function(tbl){
        tbl.increments('id').primary();
        tbl.integer('org_id').unsigned().notNullable().references('id').inTable('organizations')
        tbl.integer('donor_id').unsigned().notNullable().references('id').inTable('donors')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('org_donors');
};
