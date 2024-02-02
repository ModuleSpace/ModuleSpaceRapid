import 'dotenv/config';
import { PORT } from './config/config';
import middleware from './middleware/main';
import statusRouter from './routes/status';
import cors from 'cors';
import express, { Express } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', middleware);
app.use('/', statusRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
