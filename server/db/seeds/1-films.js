/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('films').insert([
    {
      id: 1,
      title: 'Inglourious Basterds',
      director: 'Quentin Tarantino',
      year: '2009',
    },
    {
      id: 2,
      title: 'Star Wars',
      director: 'George Lucas',
      year: '1977',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      year: '2008',
    },
    {
      id: 4,
      title: 'King Kong',
      director: 'Peter Jackson',
      year: '2005',
    },
    {
      id: 5,
      title: 'The Death of Stalin',
      director: 'Armando Lannucci',
      year: '2017',
    },
    {
      id: 6,
      title: 'Harry Potter and the Prisoner of Azkaban',
      director: 'Alfonso Cuaron',
      year: '2004',
    },
    {
      id: 7,
      title: 'Hereditary',
      director: 'Ari Aster',
      year: '2018',
    },
    {
      id: 8,
      title: 'Fury',
      director: 'David Ayer',
      year: '2014',
    },
    {
      id: 9,
      title: 'Downfall',
      director: 'Oliver Hirschbiegel',
      year: '2004',
    },
    {
      id: 10,
      title: 'Children of Men',
      director: 'Alfonso Cuaron',
      year: '2006',
    },
  ])
}
