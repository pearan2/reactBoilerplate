import Film from "./film";

interface IFilmRepository {
  getAllFilms: () => Promise<Film[]>;
  getFilmById: (filmId: Id) => Promise<Film>;
}

export default IFilmRepository;
