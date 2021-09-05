import { RouterContext, Status } from "../library/oak.ts";
import User from "../databases/models/user.ts";
import * as rest from "../util/rest.ts";
import { bcrypt } from "../library/bcrypt.ts";

export default class Jan {
  static async get(context: RouterContext) {
    try {
      const { value } = context.request.body({ type: "json" });
      const { email, password } = await value;

      const user = await User.where("email", email).first()
        .then(async (user) => {
          if (!user) {
            return rest.response(context, rest.preset.noUser);
          }

          if (!await bcrypt.compare(password, user.password as string)) {
            return rest.response(context, rest.preset.noPassword);
          }

          return rest.response(context, {});
        })
        .catch((err) => {
          return rest.response(context, rest.preset.error(err.message));
        });
    } catch (err) {
      context.throw(err);
    }
  }

  static async post(context: RouterContext) {
    try {
      const { value } = context.request.body({ type: "json" });
      const { email, password } = await value;

      await User.create({
        email,
        password: await bcrypt.hash(password),
      }).then((result) => {
        return rest.response(context, { value: result.lastInsertId });
      }).catch((err) => {
        rest.response(context, {
          status: Status.Unauthorized,
          message: err.message,
        });
      });
    } catch (err) {
      context.throw(err);
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
