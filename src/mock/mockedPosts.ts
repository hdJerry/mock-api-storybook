import { rest } from "msw";
import { posts } from "./data";

export const mockedPostFetch = rest.get(
  "https://jsonplaceholder.typicode.com/posts",
  (_, response, context) => {
    return response(context.json(posts));
  }
);
