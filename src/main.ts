/* eslint-ignore */
import express from 'express';
import * as telegramController from './telegramController';

require('dotenv').config();

const app = express();

const hostname = process.env.HOST;
const port = process.env.PORT;

app.get('/', telegramController.getMe);

app.post('/', telegramController.postMe);

app.listen(port, () => {
  console.warn(`Server started on ${hostname}:${port}`);
});
