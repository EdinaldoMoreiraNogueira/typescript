import express from 'express';
import { HelloWord }from './route';

const app = express();

app.get('/', HelloWord )

app.listen(3333);