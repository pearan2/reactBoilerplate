import { ApolloClient } from "@apollo/client";
import IFilmRepository from "../../2_domain/film/iFilmRepository";
import IUserRepository from "../../2_domain/user/iUserRepository";
import Get from "../../lib/di/get";
import FilmRepository from "../film/filmRepository";
import UserRepository from "../user/userRepository";
import Connection from "./connection";

const dependencyInject = () => {
  ///
  Get.put<ApolloClient<any>>("Connection", Connection.getInstance());

  ///
  Get.put<IFilmRepository>("IFilmRepository", new FilmRepository());
  Get.put<IUserRepository>("IUserRepository", new UserRepository());
};

export default dependencyInject;
