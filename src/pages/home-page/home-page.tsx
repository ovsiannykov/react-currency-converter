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
            <h1 className="converter-title home-title title">
              Конвертер <br />
              <span className="currency-subtitle home-title">Валют 🇺🇦</span>
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
