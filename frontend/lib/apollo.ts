import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = process.env.GRAPHQL_URL || 'http://localhost:8080/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});
export default client;
