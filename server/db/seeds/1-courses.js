export async function seed(knex) {
  await knex('courses').del()
  await knex('courses').insert([
    {
      name: 'Become a Three.js developer',
      website_name: 'Three JS Journey',
      host: 'Bruno Simon',
      field: 'Web Development',
      cost: 156,
      link: 'https://threejs-journey.com',
      complete: false,
    },
    {
      name: 'React Front to Back',
      website_name: 'Udemy',
      host: 'Brad Traversy',
      field: 'Web Development',
      cost: 10,
      link: 'https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969430?start=0#overview',
      complete: false,
    },
    {
      name: 'Modern JavaScript From the Beginning',
      website_name: 'Udemy',
      host: 'Brad Traversy',
      field: 'Web Development',
      cost: 10,
      link: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757064?start=0#overview',
      complete: false,
    },
  ])
}
