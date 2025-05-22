import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import styles from "./ProfileMenu.module.css";
import translations from "./profileMenuTranslations";
import { LanguageContext } from "../LanguageContext";
import {
  User,
  Settings,
  LogOut,
  Pencil,
  Lock,
  Phone,
  Info,
  Gift
} from "lucide-react";

export default function ProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedLanguage } = useContext(LanguageContext);
  const langKey = selectedLanguage === "EN" ? "en" : "ua";
  const t = translations[langKey];

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/v1/userProfile/get", {
          withCredentials: true,
        });
        setProfile(response.data);
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, []);

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

    setOpen(false);

    window.location.href = "/login";
  } catch (err) {
    console.error("Logout failed:", err);
  }
};


  if (loading)
    return <div className={styles.loading}>{t.loading || "Loading..."}</div>;
  if (error)
    return (
      <div className={styles.error}>
        {t.errorPrefix || "Error:"} {error}
      </div>
    );
  if (!profile) return null;

  const {
    firstNameUa,
    lastNameUa,
    patronymicUa,
    firstNameEn,
    lastNameEn,
    patronymicEn,
    avatarBlobLink,
    phoneNumber,
  } = profile;

  const nameUa = [firstNameUa, lastNameUa, patronymicUa].filter(Boolean).join(" ");
  const nameEn = [firstNameEn, lastNameEn, patronymicEn].filter(Boolean).join(" ");
  const displayName = langKey === "en" ? nameEn : nameUa;
  const avatarUrl = avatarBlobLink || "/default-avatar.png";

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
              >
                <div className={styles.avatarOverlay} />
                <button
                  className={styles.editButton}
                  onClick={() => alert(t.editAvatar)}
                >
                  <Pencil size={24} />
                </button>
              </div>
              <div className={styles.headerInfo}>
                <div className={styles.userName}>{displayName}</div>
                <div className={styles.userPhone}>{phoneNumber}</div>
              </div>
            </div>

            <div className={styles.menuGroup}>
              <button className={styles.menuItem} onClick={goToProfile}>
                <User size={18} />
                <span>{t.profile}</span>
              </button>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/settings");
                }}
              >
                <Settings size={18} />
                <span>{t.settings}</span>
              </button>
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.groupHeader}>{t.accountControls}</div>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/change-password");
                }}
              >
                <Lock size={18} />
                <span>{t.changePassword}</span>
              </button>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/change-phone");
                }}
              >
                <Phone size={18} />
                <span>{t.changePhone}</span>
              </button>
            </div>

            <div className={styles.menuGroup}>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/info");
                }}
              >
                <Info size={18} />
                <span>{t.info}</span>
              </button>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/whats-new");
                }}
              >
                <Gift size={18} />
                <span>{t.whatsNew}</span>
              </button>
            </div>

            <div className={styles.menuGroup}>
              <button className={styles.menuItem} onClick={handleLogout}>
                <LogOut size={18} />
                <span>{t.logout}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
