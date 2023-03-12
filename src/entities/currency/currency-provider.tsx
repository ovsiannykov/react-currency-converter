import axios from "axios";
import { format } from "date-fns";
import React, { useContext } from "react";
import { CurrenciesContext, Props, State } from "./types";

const BASE_URL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

const UAH = {
  r030: 999,
  txt: "Українська гривня",
  rate: 1,
  cc: "UAH",
  exchangedate: format(new Date(), "dd.MM.yyyy"),
};

export const currenciesContext = React.createContext<CurrenciesContext>(
  undefined!
);

export class CurrenciesProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      context: {
        currencies: [],
        getCurrencies: this.getCurrencies,
        isLoading: false,
        usd: 0,
      },
    };
  }

  getCurrencies = async () => {
    this.setState((prev) => ({
      context: { ...prev.context, isLoading: true },
    }));

    try {
      const res = await axios.get(BASE_URL);
      const currenciesArr = res.data;
      await currenciesArr.unshift(UAH);

      if (res.status === 200) {
        await this.setState((prev) => ({
          context: { ...prev.context, currencies: currenciesArr },
        }));

        const usdArr = this.state.context.currencies.filter(
          (el) => el.cc === "USD"
        );

        this.setState((prev) => ({
          context: { ...prev.context, usd: usdArr[0]?.rate },
        }));
      }
    } catch (error) {
      console.log(error);
      window.alert("Щось пiшло не так... Спробуйте оновити сторінку");
    } finally {
      this.setState((prev) => ({
        context: { ...prev.context, isLoading: false },
      }));
    }
  };

  render(): JSX.Element {
    return (
      <currenciesContext.Provider value={this.state.context}>
        {this.props.children}
      </currenciesContext.Provider>
    );
  }
}

export const useCurrenciesContext = () => useContext(currenciesContext);
