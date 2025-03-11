<<<<<<< HEAD
// Sidebar.js
import React, { useContext } from "react";
import styles from './sidebar.module.css';
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
=======
import React, {useState} from "react";
import styles from './sidebar.module.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import RoundingButton from "../RoundingButton/RoundingButton";
import Transfer_Modal from "../modals/Transfer_Modal/Transfer_Modal";

const menuItems = [
    {to: "/", icon: "home.svg", label: "Головна"},
    {to: "/transactions", icon: "transfer.svg", label: "Перекази", hasArrow: true,modal:"transfer"},
    {to: "/connection", icon: "connect.svg", label: "Зв'язок", hasArrow: true},
    {to: "/saving", icon: "saving.svg", label: "Заощядження", hasArrow: true},
    {to: "/conversions", icon: "conversions.svg", label: "Конверти"},
    {to: "/piggy_bank", icon: "piggy_bank.svg", label: "Скарбничка"},
    {to: "/credits", icon: "moneybag.svg", label: "Кредити", hasArrow: true},
    {to: "/cards", icon: "cards.svg", label: "Картки", hasArrow: true},
    {to: "/securities", icon: "securities.svg", label: "Цінні папери"},
    {to: "/auto_payments", icon: "auto_payments.svg", label: "Автоплатежі"},
    {to: "/transport", icon: "transport.svg", label: "Транспорт", hasArrow: true},
    {to: "/insurance", icon: "insurance.svg", label: "Страхування", hasArrow: true},
    {to: "/auto", icon: "auto.svg", label: "Авто", hasArrow: true},
    {to: "/services", icon: "services.svg", label: "Послуги", hasArrow: true},
    {to: "/fun", icon: "fun.svg", label: "Розваги", hasArrow: true},
    {to: "/good", icon: "good.svg", label: "Добро"},
    {to: "/juniors", icon: "juniors.svg", label: "Юніори", hasArrow: true},
    {to: "/business", icon: "business.svg", label: "Бізнес", hasArrow: true},
]
>>>>>>> 732491b71859aaa65a280046eb0ae8a9b54f5108

const modals = {
    transfer: Transfer_Modal,
}

function Sidebar() {
<<<<<<< HEAD
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
=======
    const location = useLocation();
    const navigate = useNavigate();
    const [activeModal,setActiveModal] = useState(null);

    const handleOpenModal = (e,modal)=>{
        e.preventDefault();
        setActiveModal(modal);
    };
    const handleCloseModal = ()=>{
        setActiveModal(null);
    };
    const ModalComponent = activeModal ? modals[activeModal] : null;

    const handleTransactionClick = ()=>{
        navigate("/transactions");
        setActiveModal(null);
    }

    return (
        <aside className={styles.sidebar}>
            <nav className={`sidebar ${location.pathname === "/" ? "sidebar-home" : "sidebar-other"}`}>
                <ul>
                    {menuItems.map(({to, icon, label, hasArrow,modal}) => (
                        <li key={to}>
                            {modal ? (
                                <button>
                                    <div className={`${styles.iconContainer} ${activeModal === modal ? styles.active : ""}`}
                                         onClick={(e) => handleOpenModal(e, modal)}>
                                        <img src={`./icons/${icon}`} alt={label}/>
                                        <div className={styles.iconWrapper}>
                                            <div>{label}</div>
                                            {hasArrow && <img src="./icons/dir_right.svg" alt="->"/>}
                                        </div>
                                    </div>
                                </button>
                            ) : (
                                <Link to={to} className={styles.iconContainer}>
                                    <img src={`./icons/${icon}`} alt={label}/>
                                    <div className={styles.iconWrapper}>
                                        <div>{label}</div>
                                        {hasArrow && <img src="./icons/dir_right.svg" alt="->"/>}
                                    </div>
                                </Link>
                            )}
                          </li>
                    ))}
                </ul>
            </nav>
            {ModalComponent && <ModalComponent onClose={handleCloseModal}
                                               onTransactionClick={handleTransactionClick}/>}
        </aside>
    )
>>>>>>> 732491b71859aaa65a280046eb0ae8a9b54f5108
}

export default Sidebar;
