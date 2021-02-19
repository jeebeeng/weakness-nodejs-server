const typesRoutes = (app, fs) => {
  const dataPath = './data/types.json';

  app.get('/types', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = typesRoutes;
