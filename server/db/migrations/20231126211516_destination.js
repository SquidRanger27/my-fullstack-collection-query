/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('destination', function (table) {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('image')
    table.integer('NZ places_id').references('NZ places.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('destination')
}
