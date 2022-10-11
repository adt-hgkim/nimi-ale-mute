import Sinpin from "../routes/sinpin.ts";
import Jan from "../routes/jan.ts";
import Nimi from "../routes/nimi.ts";
import { isHttpError, Router } from "../library/oak.ts";

const router = new Router();

router.get("/", Sinpin.get);
router.get("/jan", Jan.get);
router.post("/jan", Jan.post);
router.get("/nimi/:nimi", Nimi.get);

export default router;
