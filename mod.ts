import { Application } from "./library/oak.ts"
import router from "./plugins/router.ts"
import db from "./databases/db.ts"

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

db.sync({ drop: true })

console.info("server listening on port :8080, http://localhost:8080")
await app.listen({ port: 8080 })
