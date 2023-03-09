import { useEffect } from "react";
import { useCurrenciesContext } from "../../entities/currency/currency-provider";

function HomePage() {
  const { currencies, getCurrencies } = useCurrenciesContext();

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default HomePage;
