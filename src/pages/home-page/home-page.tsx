import { useEffect } from "react";
import HeroImage from "../../assets/images/hero-converter-illustration.png";
import ConverterBox from "../../components/coverter-box/coverter-box";
import { useCurrenciesContext } from "../../entities/currency/currency-provider";
import "./home-page.styles.css";

function HomePage() {
  const { getCurrencies } = useCurrenciesContext();

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="text-container">
            <h1 className="font-bold text-white text-4xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo commodi nulla, quo quas dolorem
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
