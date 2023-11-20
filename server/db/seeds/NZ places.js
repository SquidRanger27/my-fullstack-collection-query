/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('NZ places').del()
  await knex('NZ places').insert([
    { id: 1, name: 'Wellington', description: 'dummy description' },
    { id: 2, name: 'Auckland', description: 'dummy description' },
    { id: 3, name: 'Christchurch', description: 'dummy description' },
  ])
}
