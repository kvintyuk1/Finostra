import React, { useContext } from "react";
import styles from "./category.module.css";
import { LanguageContext } from "../LanguageContext"; 
import { categoryTranslations } from "./categoryTranslations"; 

function Category() {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = categoryTranslations[selectedLanguage];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_info}>
        <div className={styles.wrapper_title}>
          <div className={styles.title}>{t.title}</div>
          <div className={styles.subTitle}>{t.subTitle}</div>
        </div>
        <div className={styles.wrapper_category}>
          {t.items.map((item, index) => (
            <div key={index} className={styles.wrapper_item}>
              <img src={`/icons/${item.img}.svg`} alt="" />
              <div className={styles.title_category}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
