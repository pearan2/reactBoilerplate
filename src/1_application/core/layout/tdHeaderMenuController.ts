import Film from "../../../2_domain/film/film";
import IFilmRepository from "../../../2_domain/film/iFilmRepository";
import wrapPromise from "../../../lib/asyncBounrdary/wrapPromise";
import Get from "../../../lib/di/get";

const useTDHeaderMenuController = () => {
  const filmRepo = Get.find<IFilmRepository>("IFilmRepository");

  const filmsReader = wrapPromise<null, Film[]>(
    filmRepo.getAllFilms,
    null,
    `TDHeaderMenuGetAllFilms`
  );

  return { allFilms: filmsReader() };
};

export default useTDHeaderMenuController;
