import { ApolloClient, gql } from "@apollo/client";
import IUserRepository from "../../2_domain/user/iUserRepository";
import Get from "../../lib/di/get";

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

  signUp = async (signUpParam: {
    email: string;
    password: string;
    nickname: string;
  }): Promise<boolean> => {
    const authClient = Get.find<ApolloClient<any>>("AuthConnection");
    const ret = await authClient.mutate({
      mutation: SIGN_UP,
      variables: { input: signUpParam },
    });
    console.log(ret);
    return true;
  };
}

export default UserRepository;
