import React from "react";
import styles from "./buttonForCard.module.css";

function ButtonForCard({title_button,img,onClick,colorText="whiteText",
                           sizeButton="size_button200",fontWeight="fontWeight700"}) {
    return (
        <button className={`${styles.but_style} ${styles[colorText]} ${styles[sizeButton]}
        ${styles[fontWeight]}`} onClick={onClick}>
            {title_button}
            {img && <img src={img} alt=""/>}
        </button>
    );
}

export default ButtonForCard;