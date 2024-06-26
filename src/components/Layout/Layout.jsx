import css from "./Layout.module.css";

import AppBar from "../AppBar/AppBar";

function Layout({children}) {
  return (
    <div className={css.appBar}>
      <AppBar />
      <hr />
      {children}
    </div>
  );
}

export default Layout;
