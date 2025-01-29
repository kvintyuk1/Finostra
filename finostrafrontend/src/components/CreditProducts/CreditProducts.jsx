import React from "react";
import styles from "./creditProducts.module.css";

const creditItems = [
    {icon:"pay_instal.svg",title:"Оплата частинами",text:"Купуйте зараз – платіть потім!",color:styles.bg_color_violet},
    {icon:"car.svg",title:"Авто в кредит",text:"Не відмовляйте собі у комфорті!",color:styles.bg_color_pink},
    {icon:"cash.svg",title:"Кредит готівкою",text:"Гроші на картку онлайн",color:styles.bg_color_pink},
    {icon:"home-credit.svg",title:"Житло в кредит",text:"Іпотека за ціною оренди.",color:styles.bg_color_violet},
]

function CreditProducts({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>
                        <img src={isDarkMode ? "./icons/creditProducts.svg" : "./icons/creditProducts-black.svg"} alt=""/>
                        <span>Кредитні Продукти</span>
                    </div>
                    <div className={styles.wrapper_img}>
                        <img src={isDarkMode ? "./icons/arrow-out-white.svg" : "./icons/arrow-out.svg"} alt=""/>
                    </div>
                </div>

                <div className={styles.info}>
                    {creditItems.reduce((acc,item,index)=>{
                       if(index % 2 === 0){
                           acc.push([item]);
                       }else {
                           acc[acc.length - 1].push(item);
                       }
                       return acc;
                    },[]).map((pair,index)=>(
                        <div className={styles.wrapper_content} key={index}>
                            {pair.map(({icon,title,text,color})=> (
                                <div className={`${styles.item} ${color}`} key={title}>
                                    <img src={`./icons/${icon}`} alt=""/>
                                    <div className={styles.wrapper_text}>
                                        <div>{title}</div>
                                        <span className={styles.text}>{text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CreditProducts;