import { RouterContext } from "../library/oak.ts"

export default class Auth {
  static get(context: RouterContext) {
    context.response.body = `get auth`
  }

  static post(context: RouterContext) {
    context.response.body = `post auth`
  }

  static put(context: RouterContext) {
    context.response.body = `put auth`
  }

  static patch(context: RouterContext) {
    context.response.body = `patch auth`
  }

  static delete(context: RouterContext) {
    context.response.body = `delete auth`
  }
}
