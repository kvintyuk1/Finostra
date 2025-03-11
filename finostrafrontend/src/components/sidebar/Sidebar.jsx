// Sidebar.js
import React, { useContext } from "react";
import styles from './sidebar.module.css';
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

function Sidebar() {
  const location = useLocation();
  const { tSidebar } = useContext(LanguageContext);

  const menuItems = [
    { to: "/", icon: "home.svg", label: tSidebar.home },
    { to: "/transactions", icon: "transfer.svg", label: tSidebar.transactions, hasArrow: true },
    { to: "/connection", icon: "connect.svg", label: tSidebar.connection, hasArrow: true },
    { to: "/saving", icon: "saving.svg", label: tSidebar.saving, hasArrow: true },
    { to: "/conversions", icon: "conversions.svg", label: tSidebar.conversions },
    { to: "/piggy_bank", icon: "piggy_bank.svg", label: tSidebar.piggyBank },
    { to: "/credits", icon: "moneybag.svg", label: tSidebar.credits, hasArrow: true },
    { to: "/cards", icon: "cards.svg", label: tSidebar.cards, hasArrow: true },
    { to: "/securities", icon: "securities.svg", label: tSidebar.securities },
    { to: "/auto_payments", icon: "auto_payments.svg", label: tSidebar.autoPayments },
    { to: "/transport", icon: "transport.svg", label: tSidebar.transport, hasArrow: true },
    { to: "/insurance", icon: "insurance.svg", label: tSidebar.insurance, hasArrow: true },
    { to: "/auto", icon: "auto.svg", label: tSidebar.auto, hasArrow: true },
    { to: "/services", icon: "services.svg", label: tSidebar.services, hasArrow: true },
    { to: "/fun", icon: "fun.svg", label: tSidebar.fun, hasArrow: true },
    { to: "/good", icon: "good.svg", label: tSidebar.good },
    { to: "/juniors", icon: "juniors.svg", label: tSidebar.juniors, hasArrow: true },
    { to: "/business", icon: "business.svg", label: tSidebar.business, hasArrow: true },
  ];

  return (
    <aside className={styles.sidebar}>
      <nav className={`sidebar ${location.pathname === "/" ? "sidebar-home" : "sidebar-other"}`}>
        <ul>
          {menuItems.map(({ to, icon, label, hasArrow }) => (
            <li key={to}>
              <Link to={to} className={styles.iconContainer}>
                <img src={`./icons/${icon}`} alt={label} />
                <div className={styles.iconWrapper}>
                  <div>{label}</div>
                  {hasArrow && <img src="./icons/dir_right.svg" alt="->" />}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
