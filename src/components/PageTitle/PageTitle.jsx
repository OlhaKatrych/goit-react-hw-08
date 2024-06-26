import css from "./PageTitle.module.css";

function PageTitle({children}) {
  return <h2 className={css.pageTitle}>{children}</h2>
}

export default PageTitle;
