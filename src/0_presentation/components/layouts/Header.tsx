import { Link, NavLink, To } from "react-router-dom";
import usePage from "../../../1_application/page/usePage";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const pageController = usePage();

  const links = pageController.pages.map((p) => (
    <li key={p.label}>
      <OliNavLink to={p.to}>{p.label}</OliNavLink>
    </li>
  ));

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>Oli Corp</div>
      </Link>
      <nav>
        <ul>{links}</ul>
      </nav>
    </header>
  );
};

type OliNavLinkProps = {
  children?: React.ReactNode;
  to: To;
};

const OliNavLink: React.FC<OliNavLinkProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      {props.children}
    </NavLink>
  );
};

export const HeaderFallback: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Oli Corp</div>
    </header>
  );
};

export default Header;
