import { graphql } from "msw";
import { userDetails } from "./data";

export const mockedUserProfileQuery = graphql.query(
  "UserProfile",
  (_, res, ctx) => {
    return res(ctx.data(userDetails));
  }
);
