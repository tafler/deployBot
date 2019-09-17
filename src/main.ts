/* eslint-ignore */
import express from 'express';
import bodyParser from 'body-parser';
import * as telegramController from './telegramController';

const jsonParser = bodyParser.json();

require('dotenv').config();

const app = express();

const hostname = process.env.HOST;
const port = process.env.PORT;

app.post('/deploy', telegramController.getMe);

app.post('/gitlab', jsonParser, telegramController.postMe);

app.listen(port, () => {
  console.warn(`Server started on ${hostname}:${port}`);
});
