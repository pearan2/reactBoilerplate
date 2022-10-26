import { useParams } from "react-router-dom";
import useFilmById from "../../1_application/domain/film/useFilmById";
import withAsync from "../../lib/asyncBounrdary/withAsync";

const FilmDetail: React.FC = () => {
  const { filmId } = useParams();
  const { film, refresher } = useFilmById(filmId!);

  return (
    <>
      <div>{film.openingCrawl}</div>
      <button onClick={refresher}>refresh</button>
    </>
  );
};

export default withAsync({ child: FilmDetail, errorFallback: <p>Oops!...</p> });
