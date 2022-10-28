import useFilmDetailController from "../../1_application/film/filmDetailController";
import withAsync from "../../lib/asyncBounrdary/withAsync";

const FilmDetail: React.FC = () => {
  const { film } = useFilmDetailController();

  return <div>{film.openingCrawl}</div>;
};

export default withAsync({
  child: FilmDetail,
  errorFallback: <button>back</button>,
  suspenseFallback: <p>suspense loading....</p>,
});
