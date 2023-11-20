export async function seed(knex) {
  await knex('Books').insert([
    {
      id: 1,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
    },
    {
      id: 2,
      title: "The Wise Man's Fear",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
    },
    {
      id: 3,
      title: "The Black Prism",
      author: "Brent Weeks",
      genre: "Fantasy",
    },
    {
      id: 4,
      title: "The Way of Kings",
      author: "Brandon Sanderson",
      genre: "Fantasy",
    }
  ])
}