/**
 * @param {import('knex').Knex} knex
 * @returns {Promise<void>}
 */
export function up(knex) {
  return knex.schema.createTable('task', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('details')
    table.datetime('dateAdded').defaultTo(knex.fn.now())
    table.bool('isStretch')
    table.string('colour')
  })
}

export function down(knex) {
  return knex.schema.dropTable('task')
}
