import { RouterContext, Status } from "../library/oak.ts";

interface ResponseDate {
  status?: Status;
  message?: string;
  value?: any;
}

export function response(
  context: RouterContext,
  { status = Status.OK, message = "Success", value }: ResponseDate,
): Promise<any> {
  context.response.status = status;
  context.response.body = { message, value };
  return Promise.resolve();
}

export const preset = {
  emailAlreadyExists: {
    status: Status.Unauthorized,
    message: "taso, lipu tawa kon li kepeken kin",
  },
  noUser: {
    status: Status.Unauthorized,
    message: "jan li lon ala",
  },
  noPassword: {
    status: Status.Unauthorized,
    message: "toki pimeja li ante",
  },
  error: (message: string) => ({
    status: Status.InternalServerError,
    message: message,
  }),
};
