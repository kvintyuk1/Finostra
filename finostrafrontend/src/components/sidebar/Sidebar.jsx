import React, {useContext, useState} from "react";
import styles from './sidebar.module.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import Transfer_Modal from "../modals/Transfer_Modal/Transfer_Modal";


function Sidebar() {
    const location = useLocation();
    const { tSidebar } = useContext(LanguageContext);

    const menuItems = [
        { to: "/", icon: "home.svg", label: tSidebar.home },
        { to: "/transactions", icon: "transfer.svg", label: tSidebar.transactions, hasArrow: true,modal: 'transferModal' },
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
    const navigate = useNavigate();
    const [activeModal,setActiveModal] = useState(null);

    const modals = {
        transferModal: Transfer_Modal,
    }
    const handleOpenModal = (e,modal)=>{
        e.preventDefault();

        // Закрываем модальное окно при клике на другие пункты меню
        if (activeModal !== modal) {
            setActiveModal(modal);
            navigate("/transactions", { replace: true }); // Навигация по маршруту
        }
    };

    const handleCloseModal = ()=>{
        setActiveModal(null);
    };
    const ModalComponent = activeModal ? modals[activeModal] : null;

    const handleTransactionClick = ()=>{
        navigate("/transactions");
        setActiveModal(null);
    }
    // Закрыть модальное окно при клике на другие пункты меню
    const handleMenuItemClick = () => {
        if (activeModal) {
            setActiveModal(null); // Закрываем модальное окно при клике на другой пункт меню
        }
    };

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
                                        <img src={`/icons/${icon}`} alt={label}/>
                                        <div className={styles.iconWrapper}>
                                            <div>{label}</div>
                                            {hasArrow && <img src="/icons/dir_right.svg" alt="->"/>}
                                        </div>
                                    </div>
                                </button>
                            ) : (
                                <Link to={to} className={styles.iconContainer} onClick={handleMenuItemClick}>
                                    <img src={`/icons/${icon}`} alt={label}/>
                                    <div className={styles.iconWrapper}>
                                        <div>{label}</div>
                                        {hasArrow && <img src="/icons/dir_right.svg" alt="->"/>}
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