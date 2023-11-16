export async function seed(knex){
  await knex('Authors').insert([
    {
      id: 10,
      name: "Patrick Rothfuss",
      dob: "12/12/1975",
      books_published: 6,
    },
    {
      id: 11,
      name: "Brent Weeks",
      dob: "11/11/1976",
      books_published: 11
    },
    {
      id: 12,
      name: "Brandon Sanderson",
      dob: "10/10/1974",
      books_published: 15
    }
  ])
}