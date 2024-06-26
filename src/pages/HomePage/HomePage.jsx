import css from "./HomePage.module.css";


function HomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <img className={css.pic} src='https://cdn.pixabay.com/photo/2022/05/12/03/19/binary-code-7190628_1280.jpg' alt='binary code'/>
    </div>
  );
}

export default HomePage;
