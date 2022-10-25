import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import filmSelector from "./filmSelector";

const useFilm = () => {
  const film = useRecoilValue(filmSelector);
  const refresh = useRecoilRefresher_UNSTABLE(filmSelector);

  return {
    film: film,
    refresh: refresh,
  };
};

export default useFilm;
