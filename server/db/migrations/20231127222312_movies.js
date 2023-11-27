export function up(knex) {
    return knex.schema.createTable('movies', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
      table.string('director')
      table.string('lead_actor')
    })
  }
  
  export function down(knex) {
    return knex.schema.dropTable('movies')
  }
  
