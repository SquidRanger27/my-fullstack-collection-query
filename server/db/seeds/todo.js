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
    { description: 'consume trello',type:"mvp",status:2},
    { description: 'Css Style',type:"mvp",status:3},
    { description: 'consume nuggets',type:"mvp",status:0},


    
  ]);
}
