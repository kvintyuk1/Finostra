import React, { useContext } from "react";
import styles from "./connection_Modal.module.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../LanguageContext";
import { connectionModalTranslations } from "./connectionModalTranslations";

const connectionModalItems = [
    { img: "mobile", titleKey: "mobileRecharge", path: "/connection/mobileRecharge" },
    { img: "ukrtelekom", titleKey: "ukrtelekom", path: "/connection/ukrtelekom" },
    { img: "triolan", titleKey: "triolan", path: "/connection/triolan" },
    { img: "kyivstar", titleKey: "kyivstar", path: "/connection/kyivstar" },
    { img: "volia", titleKey: "volia", path: "/connection/volia" },
    { img: "viasat", titleKey: "viasat", path: "/connection/viasat" },
    { img: "datagroup 1", titleKey: "datagroup", path: "/connection/datagroup" },
    { img: "homenet", titleKey: "homenet", path: "/connection/homenet" },
    { img: "vodafone", titleKey: "vodafone", path: "/connection/vodafone" },
];

function Connection_Modal({ onClose }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const tModal = connectionModalTranslations[selectedLanguage];

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_content}>
                    {connectionModalItems.map(({ img, titleKey, path }) => (
                        <div key={titleKey} className={styles.wrapper_item}>
                            <div className={styles.item}>
                                <img src={`/icons/${img}.svg`} alt="" />
                                <Link to={path} onClick={onClose} className={styles.link}>
                                    <span className={styles.title}>{tModal[titleKey]}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Connection_Modal;
