import React from "react";
import styles from "./buttonForCard.module.css";

function ButtonForCard({
                           title_button,
                           img,
                           onClick,
                           colorText = "whiteText",
                           sizeButton = "size_button200",
                           fontWeight = "fontWeight700",
                           type = "button",
                           isActive = false,
                       }) {
    const className = [
        styles.but_style,
        styles[colorText],
        styles[sizeButton],
        styles[fontWeight],
        isActive ? styles.active : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {title_button}
            {img && <img src={`/icons/${img}.svg`} alt="icon" />}
        </button>
    );
}

export default ButtonForCard;
