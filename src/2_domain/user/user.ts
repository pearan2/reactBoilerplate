enum UserLoginState {
  default,
  logined,
}

interface User {
  readonly email: Id;
  readonly nickname: Nickname;
  readonly loginState: UserLoginState;
}

export default User;
