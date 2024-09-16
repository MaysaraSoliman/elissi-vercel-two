import { jsonGraphqlServer } from 'json-graphql-server';
import db from '../db.cjs'; // Adjust the path as necessary

const server = jsonGraphqlServer({ db });

export default function handler(req, res) {
    return server.createHandler()(req, res);
}
