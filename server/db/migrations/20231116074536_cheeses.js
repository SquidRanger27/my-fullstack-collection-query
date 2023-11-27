export function up(knex) {
  return knex.schema.createTable('cheeses', (table) => {
    table.increments('id')
    table.varchar('name')
    table.varchar('description')
    table.integer('rating')
    table.varchar('comment')
  })
}

export function down(knex) {
  return knex.schema.dropTable('cheeses')
}
