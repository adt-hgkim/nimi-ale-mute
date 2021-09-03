import Sinpin from "../nasin/sinpin.ts"
import Jan from "../nasin/jan.ts"
import Nimi from "../nasin/nimi.ts"
import { Router } from "../library/oak.ts"

const router = new Router()

router.get("/", Sinpin.get)

router.get("/jan", Jan.get)
router.post("/jan", Jan.post)

router.get("/nimi/:nimi", Nimi.get)

export default router
