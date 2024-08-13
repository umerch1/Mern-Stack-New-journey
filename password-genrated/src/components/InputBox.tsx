import React from "react";

interface inputBoxType {
  label?: string;
  amount?: number;
  onAmmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currencyOption?: Array<string>;
  selectCurrency?: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
  className?: string;
  onCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputBox = ({
  label,
  amount,
  onAmmountChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  onCurrencyChange,
}: inputBoxType) => {
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          type="number"
          name=""
          value={amount}
          onChange={onAmmountChange}
          disabled={amountDisable}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          id=""
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={onCurrencyChange}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency: any) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
