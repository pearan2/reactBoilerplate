import { useRecoilState } from "recoil";
import { userAtom } from "./userAtom";

const useUser = () => {
  const [, setUser] = useRecoilState(userAtom);

  return {
    changeRole: (role: string) => {
      setUser({ role: role });
    },
  };
};

export default useUser;
