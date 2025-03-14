import React from "react";
import styles from "./requisites.module.css";

const valutaItems = [
    {isPlaceholder: true, name: 'Інша валюта', subname: 'Для заразування в гривні', icon: 'arrow_out16'},
    {img: 'flag_usa', name: 'USD', subname: 'Долар США', icon: 'arrow_out16'},
    {img: 'flag_euro', name: 'EUR', subname: 'Євро', icon: 'arrow_out16'},
    {img: 'flag_uk', name: 'GBP', subname: 'Фунт стерлінгів', icon: 'arrow_out16'},
    {img: 'flag_poland', name: 'PLN', subname: 'Польський злотий', icon: 'arrow_out16'},
]

function Requisites() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>Реквізити</div>
                    <div className={styles.subtitle}>Вкажіть валюту отримання SWIFT</div>
                </div>
                <div className={styles.wrapper_info}>
                    {
                        valutaItems.map(({img, isPlaceholder,name,subname,icon},index)=> (
                            <div key={index} className={styles.wrapper_item}>
                                <div className={styles.wrapper_valuta}>
                                    {
                                        isPlaceholder ? (
                                            <div className={styles.placeholder}></div>
                                        ) : (
                                            <img src={`/img/${img}.png`} className={styles.flag} alt=""/>
                                        )
                                    }
                                    <div className={styles.wrap_name}>
                                        <div className={styles.name}>{name}</div>
                                        <div className={styles.subname}>{subname}</div>
                                    </div>
                                </div>
                                <img src="/icons/arrow_out16.svg" className={styles.arrow} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Requisites;