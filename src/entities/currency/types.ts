import { CurrenciesProvider } from "./currency-provider";

export type Valute = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
};

export type CurrenciesContext = {
  currencies: Valute[];
  getCurrencies: InstanceType<typeof CurrenciesProvider>["getCurrencies"];
  isLoading: boolean;
  usd: number;
};

export type Props = {
  children: React.ReactNode;
};

export type State = {
  context: CurrenciesContext;
};
