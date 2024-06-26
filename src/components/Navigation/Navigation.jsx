import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.container}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/tasks"></NavLink>}
    </nav>
  );
}

export default Navigation;
