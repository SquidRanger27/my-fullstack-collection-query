/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    { description: 'consume API',type:"mvp",status:0},
    { description: 'create add from',type:"mvp",status:1},
    { description: 'consume API',type:"mvp",status:2},


    
  ]);
}
