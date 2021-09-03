import { RouterContext } from "../library/oak.ts"

export default class Sinpin {
  static get(context: RouterContext) {
    context.response.body = `main`
  }
}
