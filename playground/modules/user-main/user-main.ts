import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import {userRoutes} from '@yonirab/playground.modules.user-routes';
import {mongoConnector} from '@yonirab/playground.modules.mongo-connector';
const app: Application = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Bit Typegoose user service')
);

app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
);
const db = 'mongodb://localhost:27017/test';
mongoConnector({db});
userRoutes({ app });

export function userMain() {
  return 'Hello world!';
}
