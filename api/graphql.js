import { createServer } from 'json-graphql-server';
import db from '../db.cjs'; // Adjust path if necessary

const server = createServer({ db });

export default function handler(req, res) {
    return server.createHandler()(req, res);
}
