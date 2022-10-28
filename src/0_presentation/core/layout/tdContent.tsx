import { Route, Routes } from "react-router-dom";
import FilmDetail from "../../film/filmDetail";
import Home from "../../home/home";
import SignUpPage from "../../user/auth/signUp";

const TDContent = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/film/:filmId" element={<FilmDetail></FilmDetail>}></Route>
      <Route path="/signUp" element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
  );
};

export default TDContent;
