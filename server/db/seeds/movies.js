/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1,
      name: 'Inception',
      director: 'Christopher Nolan',
      image:
        'https://image.tmdb.org/t/p/original//oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    },
    {
      id: 2,
      name: 'The Sixth Sense',
      director: 'M. Night Shyamalan',
      image:
        'https://image.tmdb.org/t/p/original//4AfSDjjCy6T5LA1TMz0Lh2HlpRh.jpg',
    },
    {
      id: 3,
      name: 'Fight Club',
      director: 'David Fincher',
      image:
        'https://image.tmdb.org/t/p/original//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    },
    {
      id: 4,
      name: 'Blood Diamond',
      director: 'Edward Zwick',
      image:
        'https://image.tmdb.org/t/p/original//tnLxPpajkbVdbQl5B9CuD7sSpz9.jpg',
    },
    {
      id: 5,
      name: 'Avatar',
      director: 'James Cameron',
      image:
        'https://image.tmdb.org/t/p/original//kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
    },
    {
      id: 6,
      name: 'Nightcrawler',
      director: 'Dan Gilroy',
      image:
        'https://image.tmdb.org/t/p/original//j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg',
    },
    {
      id: 7,
      name: 'Spider-Man: Into the Spider-Verse',
      director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
      image:
        'https://image.tmdb.org/t/p/original//iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    },
    {
      id: 8,
      name: 'Hot Fuzz',
      director: 'Edgar Wright',
      image:
        'https://image.tmdb.org/t/p/original//zPib4ukTSdXvHP9pxGkFCe34f3y.jpg',
    },
  ])
}
