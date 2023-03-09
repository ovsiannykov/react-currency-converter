import axios from "axios";
import React, { useContext } from "react";
import { CurrenciesContext, Props, State } from "./types";

const BASE_URL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export const currenciesContext = React.createContext<CurrenciesContext>(
  undefined!
);

export class CurrenciesProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      context: {
        currencies: null,
        getCurrencies: this.getCurrencies,
        isLoading: false,
      },
    };
  }

  getCurrencies = async () => {
    this.setState((prev) => ({
      context: { ...prev.context, isLoading: true },
    }));

    try {
      const res = await axios.get(BASE_URL);

      if (res.status === 200) {
        this.setState((prev) => ({
          context: { ...prev.context, currencies: res.data },
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
