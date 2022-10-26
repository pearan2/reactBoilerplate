import { useNavigate } from "react-router-dom";

const TDHeaderLogo: React.FC = () => {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate("/home");
  };

  return (
    <img
      onClick={logoClickHandler}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
      height={48}
      alt="starwarsLogo"
    ></img>
  );
};

export default TDHeaderLogo;
