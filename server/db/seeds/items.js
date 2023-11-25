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
      genre: 'Book',
      description: "Man's Search for Meaning",
      dateLent: '10 July 2023',
      dateAdded: new Date(),
    },
    {
      id: 2,
      name: 'Rosa',
      genre: 'Book',
      description: 'Think Like a Monk',
      dateLent: '07 May 2023',
      dateAdded: new Date(),
    },
    {
      id: 3,
      name: 'Michael',
      genre: 'Sport',
      description: 'Squash Racquet',
      dateLent: '29 October 2023',
      dateAdded: new Date(),
    },
  ])
}
