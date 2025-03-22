import React from "react";
import { useId } from "react";

/**
 * InputBox Component
 * 
 * A reusable component that renders an input field for amount and a dropdown for currency selection.
 * 
 * @param {Object} props - The properties for the component
 * @param {string} props.label - The label text for the input field
 * @param {number} props.amount - The current amount value
 * @param {Function} props.onAmountChange - Callback function that is called when amount changes
 * @param {Function} props.onCurrencyChange - Callback function that is called when currency selection changes
 * @param {string[]} [props.currencyOptions=[]] - Array of available currency options to select from
 * @param {string} [props.selectCurrency="usd"] - The currently selected currency
 * @param {boolean} [props.amountDisable=false] - Whether the amount input field should be disabled
 * @param {boolean} [props.currencyDisable=false] - Whether the currency select field should be disabled
 * @param {string} [props.className=""] - Additional CSS class names for the component
 * 
 * @returns {JSX.Element} The rendered input box component
 */
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor= {amountInputId}
          className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
