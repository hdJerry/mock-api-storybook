import { mockedPostFetch } from "./mockedPosts";
import { mockedUserProfileQuery } from "./mockedUserProfile";

export const graphQlHandlers = [mockedUserProfileQuery];
export const apiHandlers = [mockedPostFetch];
