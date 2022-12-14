import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import useTDHeaderMenuController from "../../../1_application/core/layout/tdHeaderMenuController";
import withAsync from "../../../lib/asyncBounrdary/withAsync";

interface TDMenuItem {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: TDMenuItem[];
  popupOffset?: [number, number];
  type?: "group";
}

const TDHeaderMenu: React.FC = () => {
  const { allFilms } = useTDHeaderMenuController();

  const makeMenuItem = (): TDMenuItem[] => {
    return allFilms.map((film) => {
      return {
        key: film.id,
        label: (
          <NavLink
            className={({ isActive }) => {
              return "";
            }}
            to={`/film/${film.id}`}
          >
            {film.title}
          </NavLink>
        ),
      };
    });
  };

  return (
    <Menu
      triggerSubMenuAction="click"
      style={{ width: "100%" }}
      theme="dark"
      mode="horizontal"
      items={makeMenuItem()}
    />
  );
};

export default withAsync({
  child: TDHeaderMenu,
  suspenseFallback: <p>Loading...</p>,
});
