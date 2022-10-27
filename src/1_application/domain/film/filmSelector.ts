import { selector, selectorFamily } from "recoil";
import Film from "../../../2_domain/film/film";
import IFilmRepository from "../../../2_domain/film/iFilmRepository";
import Get from "../../../lib/di/get";

const allFilmsSelector = selector<Film[]>({
  key: "allFilmsSelectorKey",
  get: async ({ get }) => {
    const filmRepo = Get.find<IFilmRepository>("IFilmRepository");
    return filmRepo.getAllFilms();
  },
  cachePolicy_UNSTABLE: { eviction: "most-recent" },
});

export const filmByIdSelector = selectorFamily({
  key: "filmByIdSelectorKey",
  get:
    (filmId: Id) =>
    async ({ get }) => {
      const filmRepo = Get.find<IFilmRepository>("IFilmRepository");
      return filmRepo.getFilmById(filmId);
    },
});

export default allFilmsSelector;
