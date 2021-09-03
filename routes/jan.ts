import { RouterContext, Status } from "../library/oak.ts";
import User from "../databases/models/user.ts";
import * as rest from "../util/rest.ts";
import { bcrypt } from "../library/bcrypt.ts";

export default class Jan {
  static async get(context: RouterContext) {
    const { value } = context.request.body({ type: "json" });
    const { email, password } = await value;

    try {
      const user = await User.where("email", email).first();
      if (!user) {
        return rest.response(context, rest.preset.noUser);
      }

      if (await bcrypt.compare(password, user.password as string)) {
        return rest.response(context, {});
      } else {
        return rest.response(context, rest.preset.noPassword);
      }
    } catch (err) {
      return rest.response(context, rest.preset.error(err.message));
    }
  }

  static async post(context: RouterContext) {
    const { value } = context.request.body({ type: "json" });
    const { email, password } = await value;

    try {
      const { lastInsertId } = await User.create({
        email,
        password: await bcrypt.hash(password),
      });
      return rest.response(context, { value: lastInsertId });
    } catch (err) {
      return rest.response(context, rest.preset.error(err.message));
    }
  }

  static put(context: RouterContext) {
    context.response.body = `put auth`;
  }

  static patch(context: RouterContext) {
    context.response.body = `patch auth`;
  }

  static delete(context: RouterContext) {
    context.response.body = `delete auth`;
  }
}
