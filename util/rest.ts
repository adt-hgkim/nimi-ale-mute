import { RouterContext, Status } from "../library/oak.ts";

interface ResponseDate {
  type?: "resolve" | "reject" | string;
  status?: Status;
  message?: string;
  value?: any;
}

export function response(
  context: RouterContext,
  { type = "resolve", status = Status.OK, message, value }: ResponseDate,
): Promise<any> {
  context.response.status = status;
  context.response.body = { message, value };
  if (type === "resolve") {
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
}

export const preset = {
  noUser: {
    type: "resolve",
    status: Status.Unauthorized,
    message: "jan li lon ala",
  },
  noPassword: {
    type: "resolve",
    status: Status.Unauthorized,
    message: "toki pimeja li ante",
  },
  error: (message: string) => ({
    type: "reject",
    status: Status.InternalServerError,
    message: message,
  }),
};
