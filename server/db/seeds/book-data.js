export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { id: 1, title: 'A Christmas Carol', author: 'Charles Dickens' },
    { id: 2, title: 'Law in a Time of Crises', author: 'Jonathan Sumption' },
    { id: 3, title: 'Emma', author: 'Jane Austen' },
  ])
}
