import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <h1 className={css.title}>We would like to present the application for your attention:</h1>
      <p className={css.text}>The Book of the Contacts</p>
      <img
        className={css.pic}
        src="https://media.istockphoto.com/id/183890264/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%B0-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0-%D0%B7-%D0%B2%D1%96%D0%B4%D1%81%D1%96%D1%87%D0%BD%D0%B8%D0%BC-%D0%BA%D0%BE%D0%BD%D1%82%D1%83%D1%80%D0%BE%D0%BC.jpg?s=2048x2048&w=is&k=20&c=9fIPoPG3cGcctIiDto4nQbMnsRx5TFnX8TWV2tkZH9A="
        alt="red book"
      />
    </div>
  );
}

export default HomePage;
