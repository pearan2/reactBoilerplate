import { ApolloClient, InMemoryCache } from "@apollo/client";

class Connection {
  private static _instance: ApolloClient<any> | null = null;

  static getInstance = () => {
    if (Connection._instance === null) {
      const client = new ApolloClient({
        uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
        cache: new InMemoryCache(),
      });
      Connection._instance = client;
    }
    return Connection._instance;
  };
}

export default Connection;
