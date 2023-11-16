/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('Books', (table) => {
    table.increments().primary().references('Authors_Books.book_id')
    table.string('title')
    table.string('author').references('Authors.name')
    table.string('genre')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('Books')
}
