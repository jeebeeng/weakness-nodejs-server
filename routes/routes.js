const pokemonRoutes = require('./pokemon');
const typesRoutes = require('./types');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('pokemon weakness api');
  });

  pokemonRoutes(app, fs);
  typesRoutes(app, fs);
};

module.exports = appRouter;
