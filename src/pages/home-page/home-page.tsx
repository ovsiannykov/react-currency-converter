import HeroImage from "../../assets/images/hero-converter-illustration.png";
import ConverterBox from "../../components/coverter-box/coverter-box";
import Header from "../../components/header/header";
import "./home-page.styles.css";

function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-container">
          <div className="text-container">
            <h1 className="font-extrabold text-white text-6xl title uppercase">
              Конвертер <br />
              <span className="font-extrabold text-white text-8xl uppercase">
                Валют 🇺🇦
              </span>
            </h1>
            <ConverterBox />
          </div>
          <div className="image-container">
            <img
              src={HeroImage}
              className="hero-illustration"
              alt="Currency Converter"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
