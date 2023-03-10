import { useEffect } from "react";
import {
  CurrenciesProvider,
  useCurrenciesContext,
} from "./entities/currency/currency-provider";
import HomePage from "./pages/home-page/home-page";

function App() {
  const { getCurrencies } = useCurrenciesContext();

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  return <HomePage />;
}

function Index() {
  return (
    <CurrenciesProvider>
      <App />
    </CurrenciesProvider>
  );
}

export default Index;
