
exports.up = function(knex) {
  return knex.schema.createTable("tools", function(table){
      table.increments("id")
      table.text("title")
      table.text("link")
      table.text("description")
      table.text("tags")

      table.timestamp("created_at").defaultTo(knex.fn.now())
      table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
};
exports.down = function(knex) {
    return knex.schema.dropTable("tools")
};
