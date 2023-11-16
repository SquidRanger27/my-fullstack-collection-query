export function up(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.varchar('title')
    table.varchar('author')
  })
}

export function down(knex) {
  return knex.schema.dropTable('books')
}
