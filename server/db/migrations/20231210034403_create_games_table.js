/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('PCGamesCollection', function (table) {
    table.increments('id').primary()
    table.string('game').notNullable()
    table.string('developer').notNullable()
    table.integer('year').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('PCGamesCollection')
}
