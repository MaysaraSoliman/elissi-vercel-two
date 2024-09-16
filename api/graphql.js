import { createServer } from 'json-graphql-server';
import db from '../db.cjs';

const server = createServer({ db });

export default server.createHandler();