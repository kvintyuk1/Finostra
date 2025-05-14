import React, { useState, useContext, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../redux/slices/authSlice";
import styles from "./ProfileMenu.module.css";
import { translations } from "../header/translations";
import { LanguageContext } from "../LanguageContext";
import { User, Settings, LogOut } from 'lucide-react';
import { createPortal } from "react-dom";


export default function ProfileMenu({ avatarUrl }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);
  const t = translations[selectedLanguage];
  const menuRef = useRef(null);

  const handleToggle = () => setOpen(prev => !prev);

  const handleLogout = async () => {
    await dispatch(fetchLogout());
    window.location.reload();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuRef]);

  return (
    <div className={styles.container} ref={menuRef}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatarUrl || '/default-avatar.png'})` }}
        onClick={handleToggle}
      />

      {open && (
        <>
          <div className={styles.backdrop} />
          <div className={styles.dropdown}>
            <button className={styles.menuItem} onClick={() => alert(t.profile)}>
              <User size={18} />
              <span>{t.profile}</span>
            </button>
            <button className={styles.menuItem} onClick={() => alert(t.settings)}>
              <Settings size={18} />
              <span>{t.settings}</span>
            </button>
            <button className={styles.menuItem} onClick={handleLogout}>
              <LogOut size={18} />
              <span>{t.logout}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}