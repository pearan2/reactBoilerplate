import { useParams } from "react-router-dom";
import Film from "../../2_domain/film/film";
import IFilmRepository from "../../2_domain/film/iFilmRepository";
import wrapPromise from "../../lib/asyncBounrdary/wrapPromise";
import Get from "../../lib/di/get";

const useFilmDetailController = () => {
  const { filmId } = useParams();
  const filmRepo = Get.find<IFilmRepository>("IFilmRepository");

  const filmReader = wrapPromise<Id, Film>(
    filmRepo.getFilmById,
    filmId!,
    `FilmDetailFilmRepo`
  );

  const film = filmReader();
  return { film: film };
};

export default useFilmDetailController;
