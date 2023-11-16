export function up(knex) {
  return knex.schema.createTable('cheese', (table) => {
    table.increments('id')
    table.varchar('name')
    table.varchar('description')
    table.integer('rating_out_of_a_possible_10_Goldblums')
    table.varchar('comment')
  })
}

export function down(knex) {
  return knex.schema.dropTable('cheese')
}
