import Film from "../../2_domain/film/film";
import IFilmRepository from "../../2_domain/film/iFilmRepository";
import sleep from "../../lib/util/sleep";

class FilmRepository implements IFilmRepository {
  getAllFilms = async () => {
    await sleep(2000);
    return Promise.resolve<Film[]>([
      {
        id: "123",
        episodeId: 1,
        title: "test",
      },
    ]);
  };
}

export default FilmRepository;
