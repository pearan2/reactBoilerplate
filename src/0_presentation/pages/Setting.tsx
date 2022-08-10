import useUser from "../../1_application/user/useUser";

const Setting: React.FC = () => {
  const user = useUser();

  const changeRoleHandler = () => {
    user.changeRole("admin");
  };

  return (
    <>
      <div>MyPages</div>
      <button onClick={changeRoleHandler}>Change role to admin</button>
    </>
  );
};

export default Setting;
