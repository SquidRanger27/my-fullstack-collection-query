/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('PCGamesCollection', function (table) {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('developer').notNullable()
    table.integer('year').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('PCGamesCollection')
}
