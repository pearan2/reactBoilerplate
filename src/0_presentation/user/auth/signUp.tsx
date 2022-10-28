import useSignUpController from "../../../1_application/user/auth/signUpController";
import withAsync from "../../../lib/asyncBounrdary/withAsync";

const SignUpPage = () => {
  const { signUpHandler } = useSignUpController();

  return (
    <>
      <div>this is signUp Page</div>
      <button onClick={signUpHandler}>SignUp</button>
    </>
  );
};

export default withAsync({
  child: SignUpPage,
  errorFallback: <p>signUpError...</p>,
  suspenseFallback: <p>signing...</p>,
});
