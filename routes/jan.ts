import { RouterContext, Status } from "../library/oak.ts";
import User from "../databases/models/user.ts";
import { response } from "../util/rest.ts";
import { bcrypt } from "../library/bcrypt.ts";
import db from "../databases/db.ts";

export default class Jan {
  static async get(context: RouterContext) {
    const { value } = context.request.body({ type: "json" });
    const { email, password } = await value;

    try {
      const user = await User.where("email", email).first();
      if (!user) {
        return response(context, {
          status: Status.Unauthorized,
          message: "jan li lon ala",
        });
      }

      if (await bcrypt.compare(password, user.password as string)) {
        return response(context, {});
      } else {
        return response(context, {
          status: Status.Unauthorized,
          message: "toki pimeja li ante",
        });
      }
    } catch (err) {
      return response(context, {
        type: "reject",
        status: Status.InternalServerError,
        message: err.message,
      });
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
      return response(context, { value: lastInsertId });
    } catch (err) {
      return response(context, {
        type: "reject",
        status: Status.InternalServerError,
        message: err.message,
      });
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
