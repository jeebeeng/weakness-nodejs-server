import pokemonRoutes from './pokemon';
import typesRoutes from './types';

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('pokemon weakness api');
  });

  pokemonRoutes(app, fs);
  typesRoutes(app, fs);
};

export default appRouter;
