import React, {useState} from "react";
import styles from "./typeDigitalCard.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function TypeDigitalCard({selectedType,onSelectType}) {
    const handleClick = (type)=>{
        onSelectType(type);
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrap_digitalCard_out}>
                <img src="/icons/arrow_out_left24.svg" alt=""/>
                <div className={styles.title}>Digital Card</div>
            </div>
            <div className={styles.wrap_typeCard}>
                <div className={styles.name_type}>Тип картки</div>
                <div className={styles.wrap_buttons}>
                    <ButtonForCard
                    title_button="Кредитна"
                    sizeButton="size_button102"
                    isActive={selectedType === "Кредитна"}
                    onClick={()=>handleClick("Кредитна")}
                    />
                    <ButtonForCard
                    title_button="Дебетова"
                    sizeButton="size_button102"
                    isActive={selectedType === "Дебетова"}
                    onClick={()=>handleClick("Дебетова")}
                    />
                </div>
            </div>
        </div>
    );
}

export default TypeDigitalCard;