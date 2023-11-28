/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comics').del()
  await knex('comics').insert([
    { id: 1, name: 'Batman: The Killing Joke', issue_number: '0' },
    { id: 2, name: 'The Sandman', issue_number: '1' },
    { id: 3, name: 'Allstar Superman', issue_number: '0' },
  ])
}
