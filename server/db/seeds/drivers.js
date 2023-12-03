/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('drivers').del()
  await knex('drivers').insert([
    {id: 1, name: 'Lewis Hamilton', team: 'Mercedes', championships: '7'},
    {id: 2, name: 'Aryton Senna', team: 'McLaren', championships: '3'},
    {id: 3, name: 'Jim Clark', team: 'Lotus', championships: '2'},
    {id: 4, name: 'Nicro Rosberg', team: 'Mercedes', championships: '1'},
    {id: 5, name: 'Max Verstappen', team: 'Red Bull', championships: '3'},
    {id: 6, name: 'Daniel Ricciardo', team: 'Alpha Tauri', championships: '0'}
  ]);
};
