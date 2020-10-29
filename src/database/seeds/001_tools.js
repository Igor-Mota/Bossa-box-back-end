
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tools').del()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {title: 'teste', link:"https://google.com", description:"umadescrição sobre a ferramenta", tags:"api facil, intuitiva,teste"},
        {title: 'teste2', link:"https://google.com", description:"umadescrição sobre a ferramenta", tags:"pacote escrita teste compass"}
      ]);
    });
};
