
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'user', password:"123456"},
        {name: 'twixtaxe', password:"123456"},
      ]);
    });
};
