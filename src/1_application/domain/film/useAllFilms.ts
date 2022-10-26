import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import allFilmsSelector from "./filmSelector";

const useAllFilms = () => {
  const allFilms = useRecoilValue(allFilmsSelector);
  const refresh = useRecoilRefresher_UNSTABLE(allFilmsSelector);

  return {
    allFilms: allFilms,
    refresh: refresh,
  };
};

export default useAllFilms;
