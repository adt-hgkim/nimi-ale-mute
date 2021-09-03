import { Database, SQLite3Connector } from "../library/denodb.ts"
import User from "./models/user.ts"
import Word from "./models/word.ts"
import Definition from "./models/definition.ts"
import Vote from "./models/vote.ts"

const connector = new SQLite3Connector({
  filepath: "./databases/db.sqlite",
})
const db = new Database(connector)

db.link([User, Word, Definition, Vote])

export default db
