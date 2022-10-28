type SignUpParam = {
  email: Email;
  password: Password;
  nickname: Nickname;
};

interface IUserRepository {
  signIn: () => Promise<AccessToken>;
  signUp: (signUpParam: SignUpParam) => Promise<boolean>;
}

export default IUserRepository;
