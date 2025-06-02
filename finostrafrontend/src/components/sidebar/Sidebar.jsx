import React, {useContext, useState} from "react";
import styles from "./sidebar.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LanguageContext} from "../LanguageContext";
import Transfer_Modal from "../modals/Transfer_Modal/Transfer_Modal";
import Connection_Modal from "../modals/Connection_Modal/Connection_Modal";
import Credit_Modal from "../modals/Credit_Modal/Credit_Modal";
import Cards_Modal from "../modals/Cards_Modal/Cards_Modal";
import Deposit_Modal from "../modals/Deposit_Modal/Deposit_Modal";
import Konverty_one_Modal from "../modals/Konverty_one_Modal/Konverty_one_Modal";
import Konverty_two_Modal from "../modals/Konverty_two_Modal/Konverty_two_Modal";
import Konverty_three_Modal from "../modals/Konverty_three_Modal/Konverty_three_Modal";

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const {tSidebar} = useContext(LanguageContext);
    const [activeModal, setActiveModal] = useState(null);

    const menuItems = [
        {to: "/", icon: "home.svg", label: tSidebar.home},
        {
            to: "/transactions",
            icon: "transfer.svg",
            label: tSidebar.transactions,
            hasArrow: true,
            modal: "transferModal",
            path: "/transactions",
        },
        {
            to: "/connection",
            icon: "connect.svg",
            label: tSidebar.connection,
            hasArrow: true,
            modal: "connectionModal",
            path: "/connection",
        },
        {
            to: "/saving",
            icon: "saving.svg",
            label: tSidebar.saving,
            hasArrow: true,
            modal: "depositModal",
            path: "/saving",
        },
        {
            to: "/conversions",
            icon: "conversions.svg",
            label: tSidebar.conversions,
            hasArrow: true,
            modal: "konvertyOneModal",
            path: "/conversions"
        },
        {to: "/moneybox", icon: "piggy_bank.svg", label: tSidebar.moneybox},
        {
            to: "/credits",
            icon: "moneybag.svg",
            label: tSidebar.credits,
            hasArrow: true,
            modal: "creditModal",
            path: "/credits",
        },
        {to: "/cards", icon: "cards.svg", label: tSidebar.cards, hasArrow: true, modal: "cardsModal", path: "/cards"},
        {to: "/securities", icon: "securities.svg", label: tSidebar.securities},
        {to: "/auto_payments", icon: "auto_payments.svg", label: tSidebar.autoPayments},
        {to: "/transport", icon: "transport.svg", label: tSidebar.transport, hasArrow: true},
        {to: "/insurance", icon: "insurance.svg", label: tSidebar.insurance, hasArrow: true},
        {to: "/auto", icon: "auto.svg", label: tSidebar.auto, hasArrow: true},
        {to: "/services", icon: "services.svg", label: tSidebar.services, hasArrow: true},
        {to: "/fun", icon: "fun.svg", label: tSidebar.fun, hasArrow: true},
        {to: "/good", icon: "good.svg", label: tSidebar.good},
        {to: "/juniors", icon: "juniors.svg", label: tSidebar.juniors, hasArrow: true},
        {to: "/business", icon: "business.svg", label: tSidebar.business, hasArrow: true},
    ];

    const modals = {
        transferModal: Transfer_Modal,
        connectionModal: Connection_Modal,
        creditModal: Credit_Modal,
        cardsModal: Cards_Modal,
        depositModal: Deposit_Modal,
        konvertyOneModal: Konverty_one_Modal,
        konvertyTwoModal: Konverty_two_Modal,
        konvertyThreeModal: Konverty_three_Modal
    };

    const handleOpenModal = (e, modal, path) => {
        e.preventDefault();
        if (activeModal === modal) {
            setActiveModal(null);
        } else {
            setActiveModal(modal);
            navigate(path, {replace: true});
        }
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };
    const ModalComponent = activeModal ? modals[activeModal] : null;

    const handleTransactionClick = () => {
        navigate("/transactions");
        setActiveModal(null);
    };

    const handleMenuItemClick = () => {
        if (activeModal) setActiveModal(null);
    };

    return (
        <aside className={styles.sidebar}>
            <nav className={`sidebar ${location.pathname === "/" ? "sidebar-home" : "sidebar-other"}`}>
                <ul>
                    {menuItems.map(({to, icon, label, hasArrow, modal, path}) => (
                        <li key={to}>
                            {modal ? (
                                <button className={styles.iconContainer}
                                        onClick={(e) => handleOpenModal(e, modal, path)}>
                                    <div className={`${activeModal === modal ? styles.active : ""} ${styles.menuContent}`}>
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
                                               onTransactionClick={handleTransactionClick}
                                               onNextStep={()=>{
                                                   if(activeModal === "konvertyOneModal"){
                                                       setActiveModal("konvertyTwoModal");
                                                   } else if(activeModal === "konvertyTwoModal"){setActiveModal("konvertyThreeModal");
                                                   }
                                               }}
                                               navigateToConversions={()=>{setActiveModal(null);
                                               navigate("/conversions/myKonverty")}}

            />}
        </aside>
    );
}

export default Sidebar;
