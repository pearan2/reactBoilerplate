import { Route, Routes } from "react-router-dom";
import FilmDetail from "../../film/filmDetail";
import Home from "../../home/home";

const TDContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        path="/film/:filmId"
        element={
          <div>
            <FilmDetail></FilmDetail>
            <FilmDetail></FilmDetail>
          </div>
        }
      ></Route>
      {/* <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/setting" element={<Setting></Setting>}></Route> */}
    </Routes>
  );
};

export default TDContent;
