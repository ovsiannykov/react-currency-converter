import { useEffect } from "react";
import {
  CurrenciesProvider,
  useCurrenciesContext,
} from "./entities/currency/currency-provider";
import HomePage from "./pages/home-page/home-page";
import LoadingPage from "./pages/loading-page/loading-page";

function App() {
  const { getCurrencies, isLoading } = useCurrenciesContext();

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  return isLoading ? <LoadingPage /> : <HomePage />;
}

function Index() {
  return (
    <CurrenciesProvider>
      <App />
    </CurrenciesProvider>
  );
}

export default Index;
