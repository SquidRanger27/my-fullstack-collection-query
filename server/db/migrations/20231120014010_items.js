/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('items', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('item')
    table.string('description')
    table.dateTime('dateLent').defaultTo(knex.fn.now())
    table.dateTime('dateAdded').defaultTo(knex.fn.now())
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('items')
}
