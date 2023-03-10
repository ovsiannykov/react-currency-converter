import HeroImage from "../../assets/images/hero-converter-illustration.png";
import ConverterBox from "../../components/coverter-box/coverter-box";
import "./home-page.styles.css";

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="text-container">
            <h1 className="font-extrabold text-white text-6xl title uppercase">
              Конвертер <br />{" "}
              <span className="font-extrabold text-white text-8xl uppercase">
                Валют 🇺🇦
              </span>
            </h1>
          </div>
          <div className="image-container">
            <img
              src={HeroImage}
              className="hero-illustration"
              alt="Currency Converter"
            />
          </div>
          <ConverterBox />
        </div>
      </section>
    </>
  );
}

export default HomePage;
