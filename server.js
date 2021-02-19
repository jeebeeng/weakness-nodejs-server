import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import fs from 'fs';

const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
  console.log(`listening on port ${server.address().port}...`);
});
