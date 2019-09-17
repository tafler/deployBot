import 'dotenv/config';
import * as express from 'express';
import { getMe, postMe } from './telegramController';

const app = express();

const hostname = process.env.HOST;
const port = process.env.PORT;

app.get('/', getMe);

app.post('/', postMe);

app.listen(port, () => {
  console.warn(`Server started on ${hostname}:${port}`);
});
