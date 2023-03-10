import { useMemo } from "react";
import LogoSvg from "../../assets/icons/logo.svg";
import { useCurrenciesContext } from "../../entities/currency/currency-provider";
import { formatter } from "../../utils/formatter";
import "./header.styles.css";

function Header() {
  const { currencies } = useCurrenciesContext();

  const USD = useMemo(
    () => currencies.filter((el) => el.cc === "USD")[0]?.rate,
    [currencies]
  );

  const EUR = useMemo(
    () => currencies.filter((el) => el.cc === "EUR")[0]?.rate,
    [currencies]
  );

  const PLN = useMemo(
    () => currencies.filter((el) => el.cc === "PLN")[0]?.rate,
    [currencies]
  );

  return (
    <header>
      <div>
        <img src={LogoSvg} alt="Logo" className="logo" />
      </div>
      {currencies.length > 0 && (
        <div className="hot-currencies">
          <p className="currecy-item">
            <span className="currency-title">USD:</span> {formatter(USD)}{" "}
            <span className="uah-title">грн</span>
          </p>
          <p className="currecy-item">
            <span className="currency-title">EUR:</span> {formatter(EUR)}{" "}
            <span className="uah-title">грн</span>
          </p>
          <p className="currecy-item">
            <span className="currency-title">PLN:</span> {formatter(PLN)}{" "}
            <span className="uah-title">грн</span>
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;
