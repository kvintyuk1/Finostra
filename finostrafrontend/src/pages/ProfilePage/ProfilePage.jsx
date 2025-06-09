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
import flameCard from "../../assets/Photo/Frame_819.png";
import arrowIcon from "../../assets/Photo/Vector_icn.png";
import securityIcon from "../../assets/Photo/Vector_sec.png";
import devicesIcon from "../../assets/Photo/meteor-icons_devices.png";
import soundIcon from "../../assets/Photo/fluent_sound-wave-circle-16-regular.png";
import phoneIcon from "../../assets/Photo/solar_phone-linear.png";
import { ProfileContext } from "../../components/contexts/ProfileContext";
import axiosInstance from "../../utils/axiosInstance";

export default function ProfilePage() {
  const { selectedLanguage, handleLanguageChange } =
    useContext(LanguageContext);
  const langKey = selectedLanguage === "EN" ? "en" : "ua";
  const t = translations[langKey];
  const [activeTab, setActiveTab] = useState("profile");
  const [bankCards, setBankCards] = useState([]);
  const [loadingCards, setLoadingCards] = useState(false);
  const [cardsError, setCardsError] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSecuritySection, setExpandedSecuritySection] = useState(null);

  const { profile, loading, error, refreshProfile } =
    useContext(ProfileContext);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!profile) refreshProfile();
  }, [profile, refreshProfile]);

  useEffect(() => {
    const fetchBankCards = async () => {
      if (activeTab !== "payments") return;

      setLoadingCards(true);
      setCardsError(null);
      try {
        const response = await axiosInstance.get("/api/v1/bankCard/get", {
          params: { currency: "UAH" },
          withCredentials: true,
        });
        console.log("Bank cards API response:", response.data);
        const cardsData = response.data?.cards || response.data || [];
        setBankCards(Array.isArray(cardsData) ? cardsData : [cardsData]);
      } catch (err) {
        console.error("Failed to fetch bank cards:", err);
        setCardsError(
          err.response?.data?.message || "Failed to load bank cards"
        );
        setBankCards([]);
      } finally {
        setLoadingCards(false);
      }
    };

    fetchBankCards();
  }, [activeTab]);

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
      alert(langKey === "en" ? "Contact deleted" : "Контакт видалено");
      refreshProfile();
    } catch (err) {
      console.error("Delete failed:", err);
      alert(
        langKey === "en"
          ? "Failed to delete contact"
          : "Не вдалося видалити контакт"
      );
    }
  };

  const handleSectionClick = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <>
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
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    className={styles.avatarImg}
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
              <h2 className={styles.sectionTitle}>
                {t.sections.contactDetails}
              </h2>
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
                <button
                  className={styles.addContactBtn}
                  onClick={handleAddPhone}
                >
                  <span className={styles.plusIcon}>+</span>
                  {t.labels.addContact}
                </button>
                <button className={styles.saveBtn}>
                  {t.labels.saveChanges}
                </button>
              </div>
            </section>
          </>
        );
      case "payments":
        return (
          <section className={styles.section}>
            <div className={styles.cardUserProfileinfo}>
              <h2 className={styles.sectionTitle}>{t.sections.paymentsTabs}</h2>
              <div className={styles.labelsText}>{t.labels.communication}</div>
            </div>

            {loadingCards ? (
              <div className={styles.loading}>
                <div></div>
                <div></div>
                <span>{t.status.loadingCards}</span>
              </div>
            ) : cardsError ? (
              <div className={styles.error}>{cardsError}</div>
            ) : !Array.isArray(bankCards) || bankCards.length === 0 ? (
              <div className={styles.empty}>{t.status.noCards}</div>
            ) : (
              <div className={styles.cardsContainer}>
                {bankCards.map((card, index) => {
                  if (!card || typeof card !== "object") return null;

                  console.log("Card data:", card);

                  // Get balance from the nested balance object
                  const balanceAmount = card.balance?.amount || 0;
                  const balanceCurrency = card.balance?.currency || "UAH";
                  console.log("Parsed balance amount:", balanceAmount);

                  return (
                    <div
                      key={card.id || `card-${index}`}
                      className={styles.cardUser}
                    >
                      <img
                        src={flameCard}
                        alt="Finostra Card"
                        className={styles.cardImage}
                      />
                      <div className={styles.cardInfo}>
                        <div className={styles.cardDetails}>
                          <div className={styles.cardTitle}>
                            {card.name || t.labels.defaultCardName}
                          </div>
                          <div className={styles.cardNumbers}>
                            <div className={styles.cardNumberGroup}>
                              <span className={styles.cardNumberText}>
                                •••• {card.cardNumber?.slice(-4) || "****"}
                              </span>
                              <span className={styles.cardSeparator}>|</span>
                            </div>
                            <div className={styles.cardNumberGroup}>
                              <span className={styles.cardNumberText}>
                                {card.iban
                                  ? `${card.iban.slice(
                                      0,
                                      4
                                    )} •••• ${card.iban.slice(-6)}`
                                  : "UA •••• ••••"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.cardBalance}>
                          {typeof balanceAmount === "number" ||
                          typeof balanceAmount === "string"
                            ? Number(balanceAmount).toFixed(2)
                            : "0.00"}{" "}
                          {balanceCurrency}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      case "communications":
        return (
          <section className={styles.section}>
            <div className={styles.communicationsContainer}>
              <div className={styles.communicationsContent}>
                {Object.keys(t.communications).map((sectionKey) => {
                  const section = t.communications[sectionKey];
                  return (
                    <div
                      key={sectionKey}
                      className={styles.communicationSection}
                    >
                      <h3 className={styles.sectionTitle}>{section.title}</h3>
                      <div
                        className={`${styles.sectionContent} ${
                          expandedSection === sectionKey ? styles.expanded : ""
                        }`}
                        onClick={() => handleSectionClick(sectionKey)}
                      >
                        <span className={styles.sectionText}>
                          {section.question}
                        </span>
                        <img
                          src={arrowIcon}
                          alt="arrow"
                          className={`${styles.arrowIcon} ${
                            expandedSection === sectionKey ? styles.rotated : ""
                          }`}
                        />
                      </div>
                      {expandedSection === sectionKey && (
                        <div className={styles.expandedContent}>
                          <p>{section.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      case "security":
        return (
          <section className={styles.section}>
            <div className={styles.securityContainer}>
              <div
                className={styles.securityRow}
                onClick={() =>
                  setExpandedSecuritySection(
                    expandedSecuritySection === "devices" ? null : "devices"
                  )
                }
              >
                <div className={styles.securityItemLeft}>
                  <img
                    src={devicesIcon}
                    alt="devices"
                    className={styles.securityIcon}
                  />
                  <span className={styles.securityText}>
                    {t.security.activeDevices}
                  </span>
                </div>
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className={`${styles.arrowIcon} ${
                    expandedSecuritySection === "devices" ? styles.rotated : ""
                  }`}
                />
              </div>
              {expandedSecuritySection === "devices" && (
                <div className={styles.expandedContent}>
                  <p>{t.status.comingSoon}</p>
                </div>
              )}

              <div
                className={styles.securityRow}
                onClick={() =>
                  setExpandedSecuritySection(
                    expandedSecuritySection === "login" ? null : "login"
                  )
                }
              >
                <div className={styles.securityItemLeft}>
                  <img
                    src={phoneIcon}
                    alt="phone"
                    className={styles.securityIcon}
                  />
                  <span className={styles.securityText}>
                    {t.security.changeLogin}
                  </span>
                </div>
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className={`${styles.arrowIcon} ${
                    expandedSecuritySection === "login" ? styles.rotated : ""
                  }`}
                />
              </div>
              {expandedSecuritySection === "login" && (
                <div className={styles.expandedContent}>
                  <p>{t.status.comingSoon}</p>
                </div>
              )}

              <div
                className={styles.securityRow}
                onClick={() =>
                  setExpandedSecuritySection(
                    expandedSecuritySection === "auth" ? null : "auth"
                  )
                }
              >
                <div className={styles.securityItemLeft}>
                  <img
                    src={securityIcon}
                    alt="security"
                    className={styles.securityIcon}
                  />
                  <span className={styles.securityText}>
                    {t.security.authSettings}
                  </span>
                </div>
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className={`${styles.arrowIcon} ${
                    expandedSecuritySection === "auth" ? styles.rotated : ""
                  }`}
                />
              </div>
              {expandedSecuritySection === "auth" && (
                <div className={styles.expandedContent}>
                  <p>{t.status.comingSoon}</p>
                </div>
              )}

              <div
                className={styles.securityRow}
                onClick={() =>
                  setExpandedSecuritySection(
                    expandedSecuritySection === "voice" ? null : "voice"
                  )
                }
              >
                <div className={styles.securityItemLeft}>
                  <img
                    src={soundIcon}
                    alt="sound"
                    className={styles.securityIcon}
                  />
                  <span className={styles.securityText}>
                    {t.security.voiceBiometrics}
                  </span>
                </div>
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className={`${styles.arrowIcon} ${
                    expandedSecuritySection === "voice" ? styles.rotated : ""
                  }`}
                />
              </div>
              {expandedSecuritySection === "voice" && (
                <div className={styles.expandedContent}>
                  <p>{t.status.comingSoon}</p>
                </div>
              )}
            </div>
          </section>
        );
      default:
        return null;
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
        <div
          className={activeTab === "profile" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("profile")}
        >
          {t.tabs.profile}
        </div>
        <div
          className={activeTab === "payments" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("payments")}
        >
          {t.tabs.payments}
        </div>
        <div
          className={
            activeTab === "communications" ? styles.activeTab : styles.tab
          }
          onClick={() => setActiveTab("communications")}
        >
          {t.tabs.communications}
        </div>
        <div
          className={activeTab === "security" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("security")}
        >
          {t.tabs.security}
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
}
