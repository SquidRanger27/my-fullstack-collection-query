/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  // Insert entries
  await knex('items').insert([
    {
      id: 1,
      name: 'Dane',
      item: 'Book',
      description: "Man's Search for Meaning",
      dateLent: Date(),
      dateAdded: new Date(),
    },
    {
      id: 2,
      name: 'Rosa',
      item: 'Book',
      description: 'Think Like a Monk',
      dateLent: Date(),
      dateAdded: new Date(),
    },
    {
      id: 3,
      name: 'Michael',
      item: 'Sport',
      description: 'Sqush Racquet',
      dateLent: Date(),
      dateAdded: new Date(),
    },
  ])
}
