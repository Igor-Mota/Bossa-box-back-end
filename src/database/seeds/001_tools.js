
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tools').del()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {name: 'teste', link:"https://google.com", description:"umadescrição sobre a ferramenta", tags:"api facil, intuitiva,teste"},
        {name: 'teste2', link:"https://google.com", description:"umadescrição sobre a ferramenta", tags:"pacote escrita teste compass"}
      ]);
    });
};
