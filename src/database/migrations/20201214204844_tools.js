

exports.up = function(knex) {
  return knex.schema.createTable("tools", function(table){
      table.increments("id")
      table.text("name")
      table.text("link")
      table.text("description")
      table.text("tags")

      table.integer("user_id").unsigned()

      table.foreign("user_id").references("id").inTable("users").onDelete('CASCADE')

      table.timestamp("created_at").defaultTo(knex.fn.now())
      table.timestamp("updated_at").defaultTo(knex.fn.now())
    })
};
exports.down = function(knex) {
    return knex.schema.dropTable("tools")
};
