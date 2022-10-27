import { useParams } from "react-router-dom";
import Film from "../../2_domain/film/film";
import IFilmRepository from "../../2_domain/film/iFilmRepository";
import withAsync from "../../lib/asyncBounrdary/withAsync";
import wrapPromise from "../../lib/asyncBounrdary/wrapPromise";
import Get from "../../lib/di/get";

const FilmDetail: React.FC = () => {
  const { filmId } = useParams();
  const filmRepo = Get.find<IFilmRepository>("IFilmRepository");

  const filmReader = wrapPromise<Id, Film>(
    filmRepo.getFilmById,
    filmId!,
    `FilmDetailFilmRepo`
  );

  const film = filmReader();

  return <div>{film.openingCrawl}</div>;
};

export default withAsync({
  child: FilmDetail,
  errorFallback: <button>back</button>,
  suspenseFallback: <p>suspense loading....</p>,
});
