import React, { useContext } from "react";
import styles from "./ProfilePage.module.css";
import { Pencil } from "lucide-react";
import { LanguageContext } from "../../components/LanguageContext";


export default function ProfilePage() {
  const { selectedLanguage, handleLanguageChange } = useContext(LanguageContext);

  const changeLanguage = (lang) => {
    handleLanguageChange({ target: { value: lang } });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tabs}>
          <div className={styles.activeTab}>Профіль</div>
          <div className={styles.tab}>Платежі</div>
          <div className={styles.tab}>Комунікації</div>
          <div className={styles.tab}>Безпека</div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Загальна інформація</h2>
          <div className={styles.profileContent}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarOverlay}>
                <Pencil className={styles.pencilIcon} />
              </div>
              <div className={styles.avatar} />
            </div>

            <div className={styles.infoForm}>
              <div className={styles.languageToggle}>
                <button
                  className={
                    selectedLanguage === "EN"
                      ? styles.langButtonActive
                      : styles.langButton
                  }
                  onClick={() => changeLanguage("EN")}
                >
                  Англійська
                </button>
                <button
                  className={
                    selectedLanguage === "UA"
                      ? styles.langButtonActive
                      : styles.langButton
                  }
                  onClick={() => changeLanguage("UA")}
                >
                  Українська
                </button>
              </div>

              <div className={styles.fields}>
                <div className={styles.fieldRow}>
                  <div className={styles.value}>Верветь</div>
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.value}>Аліна</div>
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.value}>Миколаївна</div>
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.value}>04.1990</div>
                </div>
                <div className={styles.reportLink}>Повідомити про некоректні дані</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Контактні дані</h2>
          <div className={styles.contactRow}>
            <div className={styles.label}>Фінансовий номер</div>
            <div className={styles.value}>+38 (096) 759 28 96</div>
            <button className={styles.changeBtn}>Змінити</button>
          </div>
          <div className={styles.contactActions}>
            <button className={styles.addContactBtn}>
              <span className={styles.plusIcon}>+</span>
              Додати контакт
            </button>
            <button className={styles.saveBtn}>Зберегти зміни</button>
          </div>
        </section>
      </div>
    </>
  );
}