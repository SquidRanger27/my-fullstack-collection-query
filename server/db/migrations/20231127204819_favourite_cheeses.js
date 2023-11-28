export function up(knex) {
  return knex.schema.createTable('favourite_cheeses', (table) => {
    table.increments('id')
    table.integer('cheese_id')
    table.integer('user_id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('favourite_cheese')
}
