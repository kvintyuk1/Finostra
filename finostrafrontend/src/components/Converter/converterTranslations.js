import styles from "./converter.module.css";

export const converterTranslations = {
  UA: {
    title: "Конвертор валют",
    exchangeRate: "41,46",
    equal: "=",
    unitLeft: "1",
    converterItems: [
      {
        icon: "flag-ukraine.svg",
        currency: "UAH",
        iconDark: "grivna.svg",
        iconLight: "grivna-white.svg",
        hasArrowDark: "arrow-down.svg",
        hasArrowLight: "arrow-down-white.svg",
        text: "Баланс :",
        number: "23 000",
        placeholder: "Введіть сумму",
      },
      {
        icon: "flag-usa.svg",
        currency: "USD",
        iconDark: "dollar.svg",
        iconLight: "dollar-white.svg",
        hasArrowDark: "arrow-down.svg",
        hasArrowLight: "arrow-down-white.svg",
        text: "Баланс :",
        number: "0",
        placeholder: "00.00",
      },
    ],
  },
  EN: {
    title: "Currency Converter",
    exchangeRate: "41.46",
    equal: "=",
    unitLeft: "1",
    converterItems: [
      {
        icon: "flag-ukraine.svg",
        currency: "UAH",
        iconDark: "grivna.svg",
        iconLight: "grivna-white.svg",
        hasArrowDark: "arrow-down.svg",
        hasArrowLight: "arrow-down-white.svg",
        text: "Balance:",
        number: "23,000",
        placeholder: "Enter amount",
      },
      {
        icon: "flag-usa.svg",
        currency: "USD",
        iconDark: "dollar.svg",
        iconLight: "dollar-white.svg",
        hasArrowDark: "arrow-down.svg",
        hasArrowLight: "arrow-down-white.svg",
        text: "Balance:",
        number: "0",
        placeholder: "00.00",
      },
    ],
  },
};
