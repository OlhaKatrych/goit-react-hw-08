import css from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from '../../redux/filters/selectors'
import { changeFilter } from "../../redux/filters/slice";

function SearchBar() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  function handleChange(e) {
    const name = e.target.value;
    dispatch(changeFilter(name));
  }
  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.inputSearch}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
