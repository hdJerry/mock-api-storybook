import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { setContext } from "@apollo/client/link/context";

const key =
  process.env.VUE_APP_GITHUB_KEY ||
  "YmVmZWZmM2Q3YjZlZWEwYjgxODQ2ZjMzNjdjMGExYzdhNGY0NWIzOQ==";
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHQL_URL || "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const authToken = atob(key || "");
  return authToken
    ? { headers: { ...headers, authorization: `Bearer ${authToken}` } }
    : { headers };
});

// Cache implementation
const cache = new InMemoryCache({});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export const setupGraphQL = (): void => {
  provideApolloClient(apolloClient);
};
