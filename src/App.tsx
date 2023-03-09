import { CurrenciesProvider } from "./entities/currency/currency-provider";
import HomePage from "./pages/home-page/home-page";

function App() {
  return (
    <CurrenciesProvider>
      <HomePage />
    </CurrenciesProvider>
  );
}

export default App;
