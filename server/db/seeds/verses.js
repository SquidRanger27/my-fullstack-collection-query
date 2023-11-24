/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('verses').del()
  await knex('verses').insert([
    { id: 1, description: 'Truth Beyond Facts', verse: 'John 1:1-18' },
    { id: 2, description: 'Living like Jesus', verse: 'Philippians 2:1-11' },
    {
      id: 3,
      description: "It's all about Jesus",
      verse: 'Colossians 1:15-23',
    },
  ])
}
