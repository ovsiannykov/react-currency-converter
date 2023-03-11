import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useCurrenciesContext } from "../../entities/currency/currency-provider";
import "./currency-inputs-item.styles.css";

type CurrencyInputsItemProps = {
  currencyName: string;
  setCurrencyName: Dispatch<SetStateAction<string>>;
  setValue: (num: number) => void;
  value: number;
  label?: string;
};

const CurrencyInputsItem = memo(
  ({
    currencyName,
    setCurrencyName,
    setValue,
    value,
    label = "Оберiть валюту",
  }: CurrencyInputsItemProps) => {
    const { currencies } = useCurrenciesContext();
    const [count, setCount] = useState<number>(value);

    useEffect(() => {
      if (value !== count) {
        setCount(value);
      }
    }, [count, setValue, value]);

    const inputHandler = useCallback(
      (num: number) => {
        setCount(num);
        setValue(num);
      },
      [setValue]
    );

    return (
      <div>
        <div className="valute-select-box">
          <label
            htmlFor="initial_currency"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
          <select
            value={currencyName}
            onChange={(e) => setCurrencyName(e.target.value)}
            id="initial_currency"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {currencies?.map((el) => (
              <option
                selected={el.cc === currencyName}
                key={el.r030}
                value={el.cc}
              >
                {el.txt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            value={count}
            onChange={(e) => inputHandler(Number(e.target.value))}
            type="number"
            id="default-search"
            className="block w-full p-3 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter value"
            required
          />
        </div>
      </div>
    );
  }
);

export default CurrencyInputsItem;
