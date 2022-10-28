import { ApolloClient, gql } from "@apollo/client";
import Film from "../../2_domain/film/film";
import IFilmRepository from "../../2_domain/film/iFilmRepository";
import Get from "../../lib/di/get";

const GET_ALL_FILMS = gql`
  query Root {
    allFilms {
      films {
        title
        episodeID
        id
      }
    }
  }
`;

export const GET_FILM_BY_ID = gql`
  query Root($filmId: ID) {
    film(id: $filmId) {
      openingCrawl
      title
      id
      episodeID
    }
  }
`;

class FilmRepository implements IFilmRepository {
  getAllFilms = async (): Promise<Film[]> => {
    const apiClient = Get.find<ApolloClient<any>>("Connection");
    const ret = await apiClient.query({ query: GET_ALL_FILMS });
    return [...ret.data["allFilms"]["films"]];
  };

  getFilmById = async (filmId: Id): Promise<Film> => {
    const apiClient = Get.find<ApolloClient<any>>("Connection");
    const ret = await apiClient.query({
      query: GET_FILM_BY_ID,
      variables: { filmId: filmId },
      // fetchPolicy: "no-cache",
    });

    // const fakeUpdatedData = { ...ret.data };
    // fakeUpdatedData["film"] = {
    //   ...ret.data["film"],
    //   openingCrawl: "캐시되었지롱 ㅋㅋ",
    // };

    // apiClient.writeQuery({
    //   query: GET_FILM_BY_ID,
    //   variables: { filmId: filmId },
    //   data: fakeUpdatedData,
    // });
    return ret.data["film"];
  };
}

export default FilmRepository;
