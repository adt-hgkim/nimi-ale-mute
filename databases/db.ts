import { Database, SQLite3Connector } from "../library/denodb.ts";

const connector = new SQLite3Connector({
  filepath: "./database.sqlite",
});

const db = new Database(connector);

export default db;
