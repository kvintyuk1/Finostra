import React, { useContext, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from "./ProfileMenu.module.css";
import translations from "./profileMenuTranslations";
import { LanguageContext } from "../../components/LanguageContext";
import { ProfileContext } from "../../components/contexts/ProfileContext";
import { buildAvatarUrl } from "../../utils/avatar";
import defaultAvatar from "../../assets/Photo/default-avatar.png";
import iconServices from "../../assets/Photo/icon_services.png";
import iconLogout from "../../assets/Photo/line-md_logout.png";
import iconLock from "../../assets/Photo/Vector_pas.png";
import iconPhone from "../../assets/Photo/solar_phone-linear.png";
import iconInfo from "../../assets/Photo/material-symbols_info-outline-rounded.png";
import iconGift from "../../assets/Photo/iconoir_sound-high.png";

export default function ProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedLanguage } = useContext(LanguageContext);
  const langKey = selectedLanguage === "EN" ? "en" : "ua";
  const t = translations[langKey];

  const { profile, loading, error } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => setOpen((prev) => !prev);
  const goToProfile = () => {
    setOpen(false);
    navigate("/profile");
  };

  const handleLogout = async () => {
    try {
      await dispatch(fetchLogout()).unwrap();
      localStorage.clear();
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (loading)
    return <div className={styles.loading}>{t.loading || "Loading..."}</div>;
  if (error)
    return (
      <div className={styles.error}>{`${
        t.errorPrefix || "Error:"
      } ${error}`}</div>
    );
  if (!profile) return null;

  const avatarUrl = profile.avatarBlobLink
    ? buildAvatarUrl(profile.avatarBlobLink, profile.avatarFileName)
    : defaultAvatar;

  const nameUa = [profile.firstNameUa, profile.lastNameUa, profile.patronymicUa]
    .filter(Boolean)
    .join(" ");
  const nameEn = [profile.firstNameEn, profile.lastNameEn, profile.patronymicEn]
    .filter(Boolean)
    .join(" ");
  const displayName = langKey === "en" ? nameEn : nameUa;

  return (
    <div className={styles.container} ref={menuRef}>
      <div className={styles.userSummary} onClick={handleToggle}>
        <div
          className={styles.avatarTrigger}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
      </div>

      {open && (
        <>
          <div className={styles.backdrop} />
          <div className={styles.dropdown}>
            <div className={styles.profileHeader}>
              <div
                className={styles.headerAvatar}
                style={{ backgroundImage: `url(${avatarUrl})` }}
              />
              <div className={styles.headerInfo}>
                <div className={styles.userName}>{displayName}</div>
                <div className={styles.userPhone}>{profile.phoneNumber}</div>
              </div>
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.groupHeader}>{t.accountControls}</div>

              <div className={styles.menuGroup}>
               
                <button
                  className={styles.menuItem}onClick= {goToProfile}>
                  <img
                    src={iconServices}
                    alt="Settings"
                    className={styles.menuIcon}
                  />
                  <span>{t.settings}</span>
                </button>
              </div>

              <div className={styles.menuGroup}>
                <button
                  className={styles.menuItem}
                  onClick={() => {
                    setOpen(false);
                    navigate("/change-password");
                  }}
                >
                  <img src={iconLock} alt="Lock" className={styles.menuIcon} />
                  <span>{t.changePassword}</span>
                </button>
                <button
                  className={styles.menuItem}
                  onClick={() => {
                    setOpen(false);
                    navigate("/change-phone");
                  }}
                >
                  <img
                    src={iconPhone}
                    alt="Phone"
                    className={styles.menuIcon}
                  />
                  <span>{t.changePhone}</span>
                </button>
              </div>
            </div>
            <div className={styles.groupHeader}></div>
            <div className={styles.menuGroup}>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/info");
                }}
              >
                <img src={iconInfo} alt="Info" className={styles.menuIcon} />
                <span>{t.info}</span>
              </button>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/whats-new");
                }}
              >
                <img src={iconGift} alt="Gift" className={styles.menuIcon} />
                <span>{t.whatsNew}</span>
              </button>
            </div>

            <div className={styles.menuGroup}>
              <button className={styles.menuItem} onClick={handleLogout}>
                <img
                  src={iconLogout}
                  alt="Logout"
                  className={styles.menuIcon}
                />
                <span>{t.logout}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
