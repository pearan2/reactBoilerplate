import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultUri = "https://swapi-graphql.netlify.app/.netlify/functions/index";

class Connection {
  private static _instance: ApolloClient<any> | null = null;

  static getInstance = (uri: string = defaultUri) => {
    if (Connection._instance === null) {
      const client = new ApolloClient({
        uri: defaultUri,
        cache: new InMemoryCache(),
      });
      Connection._instance = client;
    }
    return Connection._instance;
  };
}

export default Connection;
