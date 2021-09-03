import { RouterContext } from "../library/oak.ts"

export default class Main {
  static get(context: RouterContext) {
    context.response.body = `main`
  }
}
