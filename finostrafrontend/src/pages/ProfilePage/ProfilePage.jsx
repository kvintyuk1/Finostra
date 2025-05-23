import React, { useContext, useRef, useState, useEffect } from "react";
import {
  uploadAvatarImage,
  updatePhoneNumber,
  addPhoneNumber,
  deletePhoneNumber,
} from "../../utils/userProfileService";
import styles from "./ProfilePage.module.css";
import { Pencil, Trash2 } from "lucide-react";
import { LanguageContext } from "../../components/LanguageContext";
import translations from "./profilePageTranslations";
import defaultAvatar from "../../assets/Photo/default-avatar.png";
import { ProfileContext } from "../../components/contexts/ProfileContext";

export default function ProfilePage() {
  const { selectedLanguage, handleLanguageChange } =
    useContext(LanguageContext);
  const langKey = selectedLanguage === "EN" ? "en" : "ua";
  const t = translations[langKey];

  const { profile, loading, error, refreshProfile } =
    useContext(ProfileContext);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!profile) refreshProfile();
  }, [profile, refreshProfile]);

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
    setUploading(true);
    try {
      await uploadAvatarImage(file);
      await refreshProfile();
    } catch (err) {
      console.error("Upload failed:", err);
      alert(
        t.status?.uploadAvatarFailed ||
          (langKey === "en"
            ? "Failed to upload avatar"
            : "Не вдалося завантажити аватар")
      );
    } finally {
      setUploading(false);
    }
  };

  const handleChangePhone = async ({ id, phoneNumber, description }) => {
    const newNumber = prompt(
      langKey === "en"
        ? "Enter new phone number:"
        : "Введіть новий номер телефону:",
      phoneNumber
    );
    if (!newNumber) return;

    const newDesc = prompt(
      langKey === "en"
        ? "Enter a description for this number (optional):"
        : "Введіть опис для цього номера (необов'язково):",
      description || ""
    );

    try {
      await updatePhoneNumber({
        id,
        phoneNumber: newNumber,
        description: newDesc || "",
      });
      alert(
        langKey === "en"
          ? "Phone number updated successfully"
          : "Номер телефону успішно оновлено"
      );
      refreshProfile();
    } catch (err) {
      console.error("Phone update failed:", err);
      alert(
        langKey === "en"
          ? "Failed to update phone number"
          : "Не вдалося оновити номер телефону"
      );
    }
  };

  const handleAddPhone = async () => {
    const newNumber = prompt(
      langKey === "en"
        ? "Enter phone number to add:"
        : "Введіть номер телефону для додавання:"
    );
    if (!newNumber) return;
    const description = prompt(
      langKey === "en"
        ? "Enter a description (optional):"
        : "Введіть опис (необов'язково):",
      ""
    );
    try {
      await addPhoneNumber({ phoneNumber: newNumber, description });
      alert(
        langKey === "en"
          ? "Contact added successfully"
          : "Контакт успішно додано"
      );
      refreshProfile();
    } catch (err) {
      console.error("Add contact failed:", err);
      alert(
        langKey === "en" ? "Failed to add contact" : "Не вдалося додати контакт"
      );
    }
  };

  const handleDeletePhone = async ({ phoneNumber }) => {
    if (!window.confirm(`Delete ${phoneNumber}?`)) return;
    try {
      await deletePhoneNumber({ phoneNumber });
      alert(
        langKey === "en" ? "Contact deleted" : "Контакт видалено"
      );
      refreshProfile();
    } catch (err) {
      console.error("Delete failed:", err);
      alert(
        langKey === "en" ? "Failed to delete contact" : "Не вдалося видалити контакт"
      );
    }
  };

  if (loading)
    return <div className={styles.loading}>{t.status.loadingProfile}</div>;
  if (error)
    return (
      <div className={styles.error}>
        {t.status.error.replace("{{error}}", error)}
      </div>
    );
  if (!profile)
    return <div className={styles.empty}>{t.status.profileNotFound}</div>;

  const {
    firstNameUa,
    lastNameUa,
    patronymicUa,
    firstNameEn,
    lastNameEn,
    patronymicEn,
    birthDate,
    phoneNumbers = [],
    phoneNumber: primaryNumber,
    avatarBlobLink,
    avatarFileName,
  } = profile;

  const nameUa = [lastNameUa, firstNameUa, patronymicUa]
    .filter(Boolean)
    .join(" ")
    .toUpperCase();
  const nameEn = [lastNameEn, firstNameEn, patronymicEn]
    .filter(Boolean)
    .join(" ")
    .toUpperCase();

  const displayName = langKey === "en" ? nameEn : nameUa;

  const contacts = [
    {
      id: null,
      phoneNumber: primaryNumber,
      description: langKey === "en" ? "Primary" : "Основний",
    },
    ...phoneNumbers,
  ];

  let avatarUrl = defaultAvatar;
  if (avatarBlobLink) {
    try {
      const urlObj = new URL(avatarBlobLink);
      const isContainer = urlObj.pathname.endsWith("/");
      avatarUrl =
        isContainer && avatarFileName
          ? `${avatarBlobLink}${avatarFileName}${urlObj.search || ""}`
          : avatarBlobLink;
      avatarUrl += avatarUrl.includes("?")
        ? `&t=${Date.now()}`
        : `?t=${Date.now()}`;
    } catch {
      avatarUrl = avatarBlobLink;
    }
  }

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
              <div className={styles.reportLink}>
                {t.labels.reportIncorrect}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.sections.contactDetails}</h2>
        {contacts.map((c, idx) => (
          <div key={idx} className={styles.contactRow}>
            <div className={styles.label}>
              {idx === 0 ? t.labels.primaryPhone : t.labels.phoneNumber}
            </div>
            <div className={styles.value}>
              {c.phoneNumber}
              {c.description && <span> ({c.description})</span>}
            </div>

            {idx === 0 && (
              <button
                className={styles.changeBtn}
                onClick={() => handleChangePhone(c)}
              >
                {t.labels.change}
              </button>
            )}

            {idx > 0 && (
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeletePhone(c)}
                title={t.labels.delete}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <div className={styles.contactActions}>
          <button className={styles.addContactBtn} onClick={handleAddPhone}>
            <span className={styles.plusIcon}>+</span>
            {t.labels.addContact}
          </button>
          <button className={styles.saveBtn}>{t.labels.saveChanges}</button>
        </div>
      </section>
    </div>
  );
}