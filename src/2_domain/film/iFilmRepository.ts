import Film from "./film";

interface IFilmRepository {
  getAllFilms: () => Promise<Film[]>;
}

export default IFilmRepository;
