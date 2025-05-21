import React, { useState, useContext, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileMenu.module.css";
import { translations } from "./translations";
import { LanguageContext } from "../LanguageContext";
import { User, Settings, LogOut, Pencil, Lock, Phone, Info, Gift } from 'lucide-react';

export default function ProfileMenu({ avatarUrl, name = "Верес А. М.", phone = "+38 (096) 759 28 96" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);
  const t = translations[selectedLanguage] || translations['en'];
  const menuRef = useRef(null);

  const handleToggle = () => setOpen(prev => !prev);
  const handleLogout = async () => {
    await dispatch(fetchLogout());
    navigate("/", { replace: true });
  };
  const goToProfile = () => {
    setOpen(false);
    navigate("/profile");
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={menuRef}>
      <div
        className={styles.avatarTrigger}
        style={{ backgroundImage: `url(${avatarUrl || '/default-avatar.png'})` }}
        onClick={handleToggle}
      />

      {open && (
        <>
          <div className={styles.backdrop} />
          <div className={styles.dropdown}>
            <div className={styles.profileHeader}>
              <div className={styles.headerAvatar} style={{ backgroundImage: `url(${avatarUrl || '/default-avatar.png'})` }}>
                <div className={styles.avatarOverlay} />
                <button className={styles.editButton} onClick={() => alert(t.editAvatar)}>
                  <Pencil size={24} />
                </button>
              </div>
              <div className={styles.headerInfo}>
                <div className={styles.userName}>{name}</div>
                <div className={styles.userPhone}>{phone}</div>
              </div>
            </div>
            <div className={styles.menuGroup}>
              <button className={styles.menuItem} onClick={goToProfile}>
                <User size={18} />
                <span>{t.profile}</span>
              </button>
              <button className={styles.menuItem} onClick={() => alert(t.settings)}>
                <Settings size={18} />
                <span>{t.settings}</span>
              </button>
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.groupHeader}>{t.accountControls}</div>
              <button className={styles.menuItem} onClick={() => alert(t.changePassword)}>
                <Lock size={18} />
                <span>{t.changePassword}</span>
              </button>
              <button className={styles.menuItem} onClick={() => alert(t.changePhone)}>
                <Phone size={18} />
                <span>{t.changePhone}</span>
              </button>
            </div>

            <div className={styles.menuGroup}>
              <button className={styles.menuItem} onClick={() => alert(t.info)}>
                <Info size={18} />
                <span>{t.info}</span>
              </button>
              <button className={styles.menuItem} onClick={() => alert(t.whatsNew)}>
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
