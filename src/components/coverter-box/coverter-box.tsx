import { useState } from "react";
import { useCurrenciesContext } from "../../entities/currency/currency-provider";
import "./coverter-box.styles.css";

function ConverterBox() {
  const { currencies } = useCurrenciesContext();
  const [initialValue, setInitialValue] = useState(1);
  const [seccundaryValue, setSeccundaryValue] = useState(1);

  const [initialCurrency, setInitialCurrency] = useState("Українська гривня");
  const [seccundaryCurrency, setSeccundaryCurrency] = useState("Доллар США");

  console.log(initialValue);

  return (
    <div className="converter-box">
      <div>
        <div className="valute-select-box">
          <label
            htmlFor="initial_currency"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Оберiть валюту
          </label>
          <select
            value={initialCurrency}
            onChange={(e) => setInitialCurrency(e.target.value)}
            id="initial_currency"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {currencies?.map((el) => (
              <option key={el.r030}>{el.txt}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            value={initialValue}
            onChange={(e) => setInitialValue(Number(e.target.value))}
            type="number"
            id="default-search"
            className="block w-full p-3 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter value"
            required
          />
        </div>
      </div>
      <div>
        <div className="valute-select-box">
          <label
            htmlFor="seccundary_currency"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Оберiть валюту
          </label>
          <select
            value={seccundaryCurrency}
            onChange={(e) => setSeccundaryCurrency(e.target.value)}
            id="seccundary_currency"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {currencies?.map((el) => (
              <option key={el.r030}>{el.txt}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            value={seccundaryValue}
            onChange={(e) => setSeccundaryValue(Number(e.target.value))}
            type="number"
            id="default-search"
            className="block w-full p-3 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter value"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default ConverterBox;
