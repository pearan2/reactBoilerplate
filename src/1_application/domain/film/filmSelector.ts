import { selector } from "recoil";
import Film from "../../../2_domain/film/film";
import IFilmRepository from "../../../2_domain/film/iFilmRepository";
import Get from "../../../lib/di/get";

const filmSelector = selector<Film[]>({
  key: "filmSelectorKey",
  get: async ({ get }) => {
    const filmRepo = Get.find<IFilmRepository>("IFilmRepository");
    return filmRepo.getAllFilms();
  },
});

export default filmSelector;
