import css from "./UserMenu.module.css";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/authOps";

function UserMenu() {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {selectUser.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
