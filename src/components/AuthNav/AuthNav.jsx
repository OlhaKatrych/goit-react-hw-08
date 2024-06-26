import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

function AuthNav() {
  return <div className={css.container}>
    <NavLink className={css.link} to="/register">Register</NavLink>
    <NavLink className={css.link} to="/login">Log In</NavLink>
  </div>;
}

export default AuthNav;
