import { Menu } from "antd";
import useFilm from "../../../1_application/domain/film/useFilm";
import withAsync from "../../../lib/asyncBounrdary/withAsync";

export interface TDMenuItem {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: TDMenuItem[];
  popupOffset?: [number, number];
  type?: "group";
}

const TDHeaderMenu: React.FC = () => {
  const { film } = useFilm();

  const menuItemClickHandler = (t: any) => {
    console.log(t);
  };

  const makeMenuItem = (): TDMenuItem[] => {
    return [
      {
        key: "1",
        label: "EP.1",
        popupOffset: [0, 0],
        children: [
          { key: "1-1", label: "EP.2" },
          { key: "1-2", label: "EP.3" },
          {
            key: "1-3",
            label: "EP.4",
            popupOffset: [0, 0],
            children: [
              { key: "1-3-1", label: "EP.2" },
              { key: "1-3-2", label: "EP.3" },
              { key: "1-3-3", label: "EP.4" },
            ],
          },
        ],
      },
      { key: "2", label: "EP.2" },
      { key: "3", label: "EP.3" },
      { key: "4", label: "EP.4" },
      { key: "5", label: "EP.5" },
      { key: "6", label: "EP.6" },
      { key: "7", label: "EP.7" },
    ];
  };

  return (
    <Menu
      triggerSubMenuAction="click"
      style={{ width: "100%" }}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={makeMenuItem()}
      onClick={menuItemClickHandler}
    />
  );
};

export default withAsync({
  child: TDHeaderMenu,
  suspenseFallback: <p>asdf...</p>,
});
