import styles from "./creditProducts.module.css";

export const creditItemsTranslations = {
  UA: [
    {
      icon: "pay_instal.svg",
      title: "Оплата частинами",
      text: "Купуйте зараз – платіть потім!",
      color: styles.bg_color_violet,
      path: "/credits/paymentInstallments",       
    },
    {
      icon: "car.svg",
      title: "Авто в кредит",
      text: "Не відмовляйте собі у комфорті!",
      color: styles.bg_color_pink,
      path: "/credits/creditCar",
    },
    {
      icon: "cash.svg",
      title: "Кредит готівкою",
      text: "Гроші на картку онлайн",
      color: styles.bg_color_pink,
      path: "/credits/creditCash",
    },
    {
      icon: "home-credit.svg",
      title: "Житло в кредит",
      text: "Іпотека за ціною оренди.",
      color: styles.bg_color_violet,
      path: "/credits/creditHouse",
    },
  ],
  EN: [
    {
      icon: "pay_instal.svg",
      title: "Pay in Installments",
      text: "Buy now – pay later!",
      color: styles.bg_color_violet,
      path: "/credits/paymentInstallments",
    },
    {
      icon: "car.svg",
      title: "Car on Credit",
      text: "Don't deny yourself comfort!",
      color: styles.bg_color_pink,
      path: "/credits/creditCar",
    },
    {
      icon: "cash.svg",
      title: "Cash Credit",
      text: "Money to your card online",
      color: styles.bg_color_pink,
      path: "/credits/creditCash",
    },
    {
      icon: "home-credit.svg",
      title: "Housing Credit",
      text: "Mortgage at the price of rent.",
      color: styles.bg_color_violet,
      path: "/credits/creditHouse",
    },
  ],
};
