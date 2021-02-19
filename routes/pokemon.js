const pokemonRoutes = (app, fs) => {
  const dataPath = './data/pokemon.json';

  app.get('/pokemon', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = pokemonRoutes;
