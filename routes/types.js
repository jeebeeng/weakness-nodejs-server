const typesRoutes = (app, fs) => {
  const dataPath = './data/types.json';

  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }
      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  app.get('/types', (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });
};

export default typesRoutes;
