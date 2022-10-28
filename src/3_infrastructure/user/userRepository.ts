import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import IUserRepository, {
  SignUpParam,
} from "../../2_domain/user/iUserRepository";

const SIGN_UP = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      value
    }
  }
`;

class UserRepository implements IUserRepository {
  signIn = async (): Promise<string> => {
    return "";
  };

  signUp = async (signUpParam: SignUpParam): Promise<boolean> => {
    const authClient = new ApolloClient({
      uri: "https://transcendence.dev:8080/graphql",
      cache: new InMemoryCache(),
    });
    const ret = await authClient.mutate({
      mutation: SIGN_UP,
      variables: { input: signUpParam },
    });
    return ret.data.signup.value as boolean;
  };
}

export default UserRepository;
