import Main from "../routes/main.ts";
import Auth from "../routes/auth.ts";
import Nimi from "../routes/nimi.ts";
import { Router } from "../library/oak.ts";

const router = new Router()
  .get("/", Main.get)
  .get("/auth", Auth.get)
  .get("/nimi/:nimi", Nimi.get);

export default router;
