import { RouterContext, Status } from "../library/oak.ts";

function response(context: RouterContext, {
  type = "resolve",
  status = Status.OK,
  message,
  value,
}: {
  type?: "resolve" | "reject";
  status?: Status;
  message?: string;
  value?: any;
}): Promise<any> {
  context.response.status = status;
  context.response.body = { message, value };
  if (type === "resolve") {
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
}

export { response };
