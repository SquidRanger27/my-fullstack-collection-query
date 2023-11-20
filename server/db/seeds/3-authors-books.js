/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('Authors_Books').insert([
    {
      author_id: 10,
      book_id: 1,
    },
    {
      author_id: 10,
      book_id: 2,
    },
    {
      author_id: 11,
      book_id: 3,
    },
    {
      author_id: 12,
      book_id: 4,
    },
  ])
}