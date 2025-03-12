import React from "react";
import styles from "./SignInModal.module.css";
import CloseIcon from "../../assets/Photo/Union.png";

function SignInModal({ onClose }) {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.frame887} onClick={handleContentClick}>
        <div className={styles.frame867}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={CloseIcon} alt="Закрити" className={styles.icon} />
          </button>
        </div>
        <div className={styles.frame868}>
          <h2 className={styles.modalTitle}>Вхід/Реєстрація</h2>
          <div className={styles.frame866}>
            <div className={styles.frame955}>
              <div className={styles.frame954}>
                <div className={styles.frame952}>
                  <div className={styles.frame852}>
                    <div className={styles.phoneNumber}>Номер телефону</div>
                    <div className={styles.frame851}>
                      <div className={styles.frame850}>
                        <div className={styles.group31}>
                          <div className={styles.vector1}></div>
                          <div className={styles.vector2}></div>
                        </div>
                        <div className={styles.countryCode}>+380</div>
                        <div className={styles.arrowOutlined}></div>
                        <div className={styles.vector3}></div>
                        <div className={styles.vector23}></div>
                        <div className={styles.maskedText}>000000000</div>
                        <div className={styles.vector24}></div>
                      </div>
                    </div>
                    <div className={styles.frame862}>
                      <div className={styles.checkboxRounded}>
                        <div className={styles.vector4}></div>
                      </div>
                      <div className={styles.confirmationText}>
                        Продовжуючи, я підтверджую, що згоден(-на) з Умовами та Правилами, й ознайомлений(-на) із Повідомленням про обробку персональних даних у Банку
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame953}>
                  <div className={styles.frame863}>
                    <div className={styles.continueText}>Продовжити</div>
                  </div>
                  <div className={styles.qrCode}></div>
                  <div className={styles.qrText}>QR-код для входу через смартфон</div>
                </div>
                <div className={styles.frame864}>
                  <div className={styles.frame641}>
                    <div className={styles.appleIcon}>
                      <div className={styles.appleIconBorder}></div>
                    </div>
                    <div className={styles.appleTextContainer}>
                      <div className={styles.availableOn}>Доступно в</div>
                      <div className={styles.appleStore}>Apple store</div>
                    </div>
                  </div>
                  <div className={styles.frame833}>
                    <div className={styles.googlePlayIcon}>
                      <div className={styles.googlePlayIconBorder}></div>
                    </div>
                    <div className={styles.googleTextContainer}>
                      <div className={styles.googleAvailable}>Доступно в</div>
                      <div className={styles.googlePlayText}>Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;