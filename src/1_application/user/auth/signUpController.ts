import IUserRepository, {
  SignUpParam,
} from "../../../2_domain/user/iUserRepository";
import wrapPromise from "../../../lib/asyncBounrdary/wrapPromise";
import Get from "../../../lib/di/get";

const useSignUpController = () => {
  const userRepo = Get.find<IUserRepository>("IUserRepository");

  const signUp = wrapPromise<SignUpParam, boolean>(
    userRepo.signUp,
    {
      identifier: "kij753@naver.com",
      password: "123",
      nickname: "honlee",
    },
    "signUpUserRepo"
  );

  const signUpHandler = () => {
    signUp();
  };

  return {
    signUpHandler: signUpHandler,
  };
};

export default useSignUpController;
