import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { filmByIdSelector } from "./filmSelector";

const useFilmById = (filmId: Id) => {
  const film = useRecoilValue(filmByIdSelector(filmId));
  const refresher = useRecoilRefresher_UNSTABLE(filmByIdSelector(filmId));

  return {
    film: film,
    refresher: refresher,
  };
};

export default useFilmById;
