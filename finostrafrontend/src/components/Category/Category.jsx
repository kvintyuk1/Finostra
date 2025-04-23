import React from "react";
import styles from "./category.module.css";

const categoryItems = [
    {img:"military-tech-outline-rounded",titleCategory:"Допомога армії"},
    {img:"hugeicons_charity",titleCategory:"Благодійність для українців"},
    {img:"iconoir_home-sale",titleCategory:"Комунальні платежі"},
    {img:"iconoir_wifi",titleCategory:"Інтернет та ТБ"},
    {img:"hugeicons_taxes",titleCategory:"Податки та збори"},
    {img:"fluent_hat-graduation-28-regular",titleCategory:"Освіта та дитячі садки  армії"},
    {img:"streamline_insurance-hand",titleCategory:"Страхові компанії"},
    {img:"icon-park-outline_foundation-makeup",titleCategory:"Косметика"},
    {img:"icon_moneybag",titleCategory:"Погашення кредитів"},
    {img:"cil_book",titleCategory:"Штрафи та порушення"},
    {img:"ph_tree-palm-light",titleCategory:"Туристичні компанії"},
]

function Category() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>Категорії</div>
                    <div className={styles.subTitle}>Оберіть категорію, яка вам потрібна, і знайдіть усе необхідне!
                    </div>
                </div>
                <div className={styles.wrapper_category}>
                    {
                        categoryItems.map(({img, titleCategory},index) => (
                            <button key={index} className={styles.wrapper_item}>
                                <img src={`/icons/${img}.svg`} alt=""/>
                                <div className={styles.title_category}>{titleCategory}</div>
                            </button>

                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Category;