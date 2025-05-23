import React, { useContext, useRef, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import styles from "./ProfilePage.module.css";
import { Pencil } from "lucide-react";
import { LanguageContext } from "../../components/LanguageContext";
import translations from "./profilePageTranslations";
import defaultAvatar from "../../assets/Photo/default-avatar.png";
import { ProfileContext } from "../../components/contexts/ProfileContext";

export default function ProfilePage() {
  const { selectedLanguage, handleLanguageChange } = useContext(LanguageContext);
  const langKey = selectedLanguage === "EN" ? "en" : "ua";
  const t = translations[langKey];

  const { profile, loading, error, refreshProfile } = useContext(ProfileContext);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleLangClick = (lang) => {
    if (lang !== "EN" && lang !== "UA") return;
    handleLanguageChange({ target: { value: lang } });
  };

  const handleAvatarWrapperClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setUploading(true);

    const form = new FormData();
    form.append("image", file);

    try {
      await axiosInstance.post(
        "/api/v1/userProfile/uploadAvatarImage",
        form,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      await refreshProfile();
    } catch (err) {
      console.error("Upload failed:", err);
      const msg =
        t.status?.uploadAvatarFailed ||
        (langKey === "en"
          ? "Failed to upload avatar"
          : "Не вдалося завантажити аватар");
      alert(msg);
    } finally {
      setUploading(false);
    }
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

  let avatarUrl = defaultAvatar;
  if (profile.avatarBlobLink) {
    try {
      const urlObj = new URL(profile.avatarBlobLink);
      const isContainer = urlObj.pathname.endsWith("/");
      if (isContainer && profile.avatarFileName) {
        avatarUrl = `${profile.avatarBlobLink}${profile.avatarFileName}${urlObj.search || ""}`;
      } else {
        avatarUrl = profile.avatarBlobLink;
      }
      const sep = avatarUrl.includes("?") ? "&" : "?";
      avatarUrl = `${avatarUrl}${sep}t=${Date.now()}`;
    } catch {
      avatarUrl = profile.avatarBlobLink;
    }
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
  } = profile;
  const nameUa = [firstNameUa, lastNameUa, patronymicUa].filter(Boolean).join(" ");
  const nameEn = [firstNameEn, lastNameEn, patronymicEn].filter(Boolean).join(" ");
  const displayName = langKey === "en" ? nameEn : nameUa;

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
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />

          <div
            className={styles.avatarWrapper}
            onClick={handleAvatarWrapperClick}
            title={t.sections.editAvatar}
          >
            <div className={styles.avatarOverlay}>
              {uploading ? (
                <span>{t.status.uploadingAvatar}…</span>
              ) : (
                <Pencil size={32} />
              )}
            </div>
            <img src={avatarUrl} alt="Avatar" className={styles.avatarImg} />
          </div>

          <div className={styles.infoForm}>
            <div className={styles.languageToggle}>
              <button
                className={
                  langKey === "en" ? styles.langButtonActive : styles.langButton
                }
                onClick={() => handleLangClick("EN")}
              >
                {t.languageToggle.english}
              </button>
              <button
                className={
                  langKey === "ua" ? styles.langButtonActive : styles.langButton
                }
                onClick={() => handleLangClick("UA")}
              >
                {t.languageToggle.ukrainian}
              </button>
            </div>

            <div className={styles.fields}>
              {displayName.split(" ").map((val, idx) => (
                <div key={idx} className={styles.fieldRow}>
                  <div className={styles.value}>{val}</div>
                </div>
              ))}
              <div className={styles.fieldRow}>
                <div className={styles.value}>{birthDate}</div>
              </div>
              <div className={styles.reportLink}>{t.labels.reportIncorrect}</div>
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