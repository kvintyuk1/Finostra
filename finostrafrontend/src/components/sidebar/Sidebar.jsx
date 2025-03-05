import React, {useState} from "react";
import styles from './sidebar.module.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import RoundingButton from "../RoundingButton/RoundingButton";
import Transfer_Modal from "../modals/Transfer_Modal";

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

const modals = {
    transfer: Transfer_Modal,
}

function Sidebar() {
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
}

export default Sidebar;