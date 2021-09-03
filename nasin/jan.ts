import { RouterContext } from "../library/oak.ts"

export default class Jan {
  static get(context: RouterContext) {
    context.response.body = `get auth`
  }

  static async post(context: RouterContext) {
    const { value } = context.request.body({ type: 'json'})
    const { email, password } = await value

    context.response.body = password + "hi" + email
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
