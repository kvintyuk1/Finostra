import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import styles from "./ProfilePage.module.css";
import { Pencil } from "lucide-react";
import { LanguageContext } from "../../components/LanguageContext";
import translations from "./profilePageTranslations";

export default function ProfilePage() {
  const { selectedLanguage, handleLanguageChange } = useContext(LanguageContext);
  const langKey = selectedLanguage === "EN" ? "en" : "ua";
  const t = translations[langKey];

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          "/api/v1/userProfile/get",
          { withCredentials: true }
        );
        setProfile(response.data);
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  // Wrapper to synthesize event for context handler
  const handleLangClick = (lang) => {
    // опциональная проверка
    if (lang !== "EN" && lang !== "UA") return;
    handleLanguageChange({ target: { value: lang } });
  };

  if (loading) {
    return <div className={styles.loading}>{t.status.loadingProfile}</div>;
  }
  if (error) {
    const msg = t.status.error.replace("{{error}}", error);
    return <div className={styles.error}>{msg}</div>;
  }
  if (!profile) {
    return <div className={styles.empty}>{t.status.profileNotFound}</div>;
  }

  const {
    firstNameUa,
    lastNameUa,
    patronymicUa,
    firstNameEn,
    lastNameEn,
    patronymicEn,
    birthDate,
    phoneNumber,
    avatarBlobLink,
  } = profile;

  const nameUa = [firstNameUa, lastNameUa, patronymicUa].filter(Boolean).join(" ");
  const nameEn = [firstNameEn, lastNameEn, patronymicEn].filter(Boolean).join(" ");
  const displayName = langKey === "en" ? nameEn : nameUa;
  const avatarUrl = avatarBlobLink || "/default-avatar.png";

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div className={styles.activeTab}>{t.tabs.profile}</div>
        <div className={styles.tab}>{t.tabs.payments}</div>
        <div className={styles.tab}>{t.tabs.communications}</div>
        <div className={styles.tab}>{t.tabs.security}</div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.sections.generalInfo}</h2>
        <div className={styles.profileContent}>
          <div
            className={styles.avatarWrapper}
            onClick={() => alert(t.sections.editAvatar)}
          >
            <div className={styles.avatarOverlay}>
              <Pencil className={styles.pencilIcon} />
            </div>
            <div
              className={styles.avatar}
              style={{ backgroundImage: `url(${avatarUrl})` }}
            />
          </div>

          <div className={styles.infoForm}>
            <div className={styles.languageToggle}>
              <button
                className={
                  langKey === "en"
                    ? styles.langButtonActive
                    : styles.langButton
                }
                onClick={() => handleLangClick("EN")}
              >
                {t.languageToggle.english}
              </button>
              <button
                className={
                  langKey === "ua"
                    ? styles.langButtonActive
                    : styles.langButton
                }
                onClick={() => handleLangClick("UA")}
              >
                {t.languageToggle.ukrainian}
              </button>
            </div>

            <div className={styles.fields}>
              {displayName.split(" ").map((val, idx) => (
                <div key={idx} className={styles.fieldRow}>
                  <div className={styles.value}>{val || ""}</div>
                </div>
              ))}
              <div className={styles.fieldRow}>
                <div className={styles.value}>
                  {t.labels.birthDate}: {birthDate}
                </div>
              </div>
              <div className={styles.reportLink}>
                {t.labels.reportIncorrect}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.sections.contactDetails}</h2>
        <div className={styles.contactRow}>
          <div className={styles.label}>{t.labels.phoneNumber}</div>
          <div className={styles.value}>{phoneNumber}</div>
          <button className={styles.changeBtn}>{t.labels.change}</button>
        </div>
        <div className={styles.contactActions}>
          <button className={styles.addContactBtn}>
            <span className={styles.plusIcon}>+</span>
            {t.labels.addContact}
          </button>
          <button className={styles.saveBtn}>{t.labels.saveChanges}</button>
        </div>
      </section>
    </div>
  );
}
