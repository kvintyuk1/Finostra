import React, { useContext } from "react";
import styles from "./transferPersonalMoney_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";
import NumberCard from "../../for card/NumberCard/NumberCard";
import Total_Sum from "../../for card/Total_Sum/Total_Sum";
import { LanguageContext } from "../../LanguageContext";
import { transferPersonalMoneyModalTranslations } from "./transferPersonalMoneyModalTranslations";

function TransferPersonalMoney_Modal({ onClose, onSuccess }) {
   
    const { selectedLanguage } = useContext(LanguageContext);
    const t = transferPersonalMoneyModalTranslations[selectedLanguage] || transferPersonalMoneyModalTranslations["UA"];
    

    const handlePaymentClick = () => {
        onSuccess();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.wrapper_content}>
                    <div className={styles.modal_info}>
                        <div className={styles.wrap_titleCard}>
                            <div className={styles.wrapper_header}>
                                <div className={styles.title}>{t.title}</div>
                                <div className={styles.wrap_purposePayment}>
                                    <span className={styles.purposePayment}>{t.purposeLabel}</span>
                                    <span className={styles.transferMoney}>{t.transferPurpose}</span>
                                </div>
                            </div>
                            <div className={styles.wrapper_card}>
                                <div className={styles.wrap_card}>
                                    <NumberCard
                                        title_card={t.fromCard}
                                        colorTitle="greyTitle"
                                        value="4441 **** **** 1234"
                                        colorValue="whiteValue"
                                        showLine={false}
                                    />
                                    <div className={styles.linea_dashed}></div>
                                    <NumberCard
                                        title_card={t.receiver}
                                        colorTitle="greyTitle"
                                        value="4441 **** **** 5678"
                                        colorValue="whiteValue"
                                        showLine={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrap_totalSum}>
                            <Total_Sum
                                title_totalSum={t.totalSum}
                                title_color="greyText"
                                totalSum="1000 UAH"
                                isRow={true}
                                hideBorder={true}
                                isMargin={true}
                            />
                        </div>
                    </div>
                    <div className={styles.modal_footer}>
                        <ButtonForCard
                            title_button={t.back}
                            sizeButton="size_button186"
                            colorText="greyText"
                            backgroundButton="blackBackground"
                            onClick={onClose}
                        />
                        <ButtonForCard
                            title_button={t.pay}
                            sizeButton="size_button186"
                            onClick={handlePaymentClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferPersonalMoney_Modal;
