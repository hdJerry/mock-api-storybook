import gql from "graphql-tag";

export const USER_QUERY = gql`
  query UserProfile($username: String!) {
    user(login: $username) {
      name
      login
      bio
      company
      avatarUrl
      followers {
        totalCount
      }
    }
  }
`;
