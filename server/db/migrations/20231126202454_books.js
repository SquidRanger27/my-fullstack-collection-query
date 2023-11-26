export async function up(knex) {
  await knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('author_name')
    table.string('book_title')
    table.string('series_title')
    table.integer('entry_number')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('books')
}
