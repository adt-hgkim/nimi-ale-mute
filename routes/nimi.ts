import { RouterContext } from "../library/oak.ts";

export default class Nimi {
  static get(context: RouterContext) {
    context.response.body = `${context.params.nimi}`;
  }
}
