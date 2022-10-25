// import Get from "../../lib/di/get";

import { ApolloClient } from "@apollo/client";
import IFilmRepository from "../../2_domain/film/iFilmRepository";
import Get from "../../lib/di/get";
import FilmRepository from "../film/filmRepository";
import Connection from "./connection";

const dependencyInject = () => {
  ///
  Get.put<ApolloClient<any>>("Connection", Connection.getInstance());

  ///
  Get.put<IFilmRepository>("IFilmRepository", new FilmRepository());
};

export default dependencyInject;
