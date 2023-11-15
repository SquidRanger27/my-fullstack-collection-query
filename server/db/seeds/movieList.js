export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    { id: 1, name: 'Iron Man', personal_rating: 5 },
    { id: 2, name: 'Your Name', personal_rating: 9 },
    { id: 3, name: 'The Lighthouse', personal_rating: 10 },
    {
      id: 4,
      name: 'Lord of the Rings: The Return of the King',
      personal_rating: 10,
    },
    { id: 5, name: 'The Labyrinth', personal_rating: 6 },
    { id: 6, name: 'The Grand Budapest Hotel', personal_rating: 9 },
    { id: 7, name: 'Prisoners', personal_rating: 8 },
  ])
}
