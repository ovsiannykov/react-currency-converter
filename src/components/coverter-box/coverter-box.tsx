import { useCallback, useState } from "react";
import { useCurrenciesContext } from "../../entities/currency/currency-provider";
import CurrencyInputsItem from "../currency-inputs-item/currency-inputs-item";
import "./coverter-box.styles.css";

function ConverterBox() {
  const { currencies, usd } = useCurrenciesContext();

  const getRateFromCurrancyName = useCallback(
    (curency: string) => {
      const selectValute = currencies.filter((el) => el.cc === curency);
      return selectValute[0]?.rate;
    },
    [currencies]
  );

  const [firstValue, setFirstValue] = useState(1);
  const [seccundaryValue, setSeccundaryValue] = useState(firstValue * usd);
  const [firstCurrencyName, setFirstCurrencyName] = useState("UAH");
  const [seccundaryCurrencyName, setSeccundaryCurrencyName] = useState("USD");

  const firstValueHandler = useCallback(
    (num: number) => {
      setFirstValue(num);
      const firstRate = getRateFromCurrancyName(firstCurrencyName);
      const seccondRate = getRateFromCurrancyName(seccundaryCurrencyName);
      const result = (num * firstRate) / seccondRate;
      setSeccundaryValue(result);
    },
    [firstCurrencyName, getRateFromCurrancyName, seccundaryCurrencyName]
  );

  const seccondValueHandler = useCallback(
    (num: number) => {
      setSeccundaryValue(num);
      const firstRate = getRateFromCurrancyName(firstCurrencyName);
      const seccondRate = getRateFromCurrancyName(seccundaryCurrencyName);
      const result = (num * seccondRate) / firstRate;
      setFirstValue(result);
    },
    [firstCurrencyName, getRateFromCurrancyName, seccundaryCurrencyName]
  );

  return (
    <div className="converter-box">
      <CurrencyInputsItem
        value={firstValue}
        setValue={firstValueHandler}
        currencyName={firstCurrencyName}
        setCurrencyName={setFirstCurrencyName}
      />
      <CurrencyInputsItem
        value={seccundaryValue}
        setValue={seccondValueHandler}
        currencyName={seccundaryCurrencyName}
        setCurrencyName={setSeccundaryCurrencyName}
      />
    </div>
  );
}

export default ConverterBox;
