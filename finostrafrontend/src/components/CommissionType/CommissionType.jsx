import React, {useState} from "react";
import styles from "./commissionType.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import Change from "../Change/Change";

function CommissionType({setIsConfirmed,selectedOption,setSelectedOption}) {

    const handleBackSend = () => {
        setIsConfirmed(false);
    }
    const options = [
        {
            value: "first",
            title: "Стандартний тариф за надсилання",
            description: "Комісія - 0,5% від суми першого переказу (min 5 UAH,max 100 USD) + 12 USD за курсом НБУ"
        },
        {
            value: "second",
            title: "Гарантований платіж",
            description: "Комісія - 0,5% від суми першого переказу (min 5 UAH, max 100 USD) 12 USD + 26,5 USD за курсом НБУ"
        }
    ];
    const handleSelect = (value)=>{
        setSelectedOption(value);
    };
    const selectedData = options.find((opt)=>opt.value === selectedOption);

    const handleChangeClick = ()=>{
        setSelectedOption(null);
    }

    return (
        <div className={`${styles.container} ${selectedOption ? styles.containerCompact : ""}`}>
            <div className={`${styles.wrapper_content} ${selectedOption ? styles.contentCompact : ""}`}>
                <div className={styles.wrap_type}>
                    <div className={styles.wrap_title_change}>
                        <span className={styles.title}>Тип комісії</span>
                        {selectedOption && (
                            <Change onClick={handleChangeClick}/>
                        )}
                    </div>
                    <div className={styles.wrap_descriptionType}>
                        {selectedOption ? (
                            <div className={styles.container2}>
                                <div className={styles.wrap_item}>
                                    <div className={styles.radio_img}>
                                        <div className={styles.radio_block}>
                                            <div className={styles.wrap_title_desc}>
                                                <span className={styles.title}>{selectedData.title}</span>
                                                <span className={styles.description}>{selectedData.description}</span>
                                            </div>
                                        </div>
                                        <img src="/icons/arrow_down16_32.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            options.map((option)=> (
                                <div className={styles.container2}>
                                    <div className={styles.wrap_item}>
                                        <div className={styles.radio_img}>
                                            <div className={styles.radio_block}>
                                                <input type="radio"
                                                       name="option"
                                                       value={option.value}
                                                       onChange={()=>handleSelect(option.value)}
                                                />
                                                <div className={styles.wrap_title_desc}>
                                                    <span className={styles.title}>{option.title}</span>
                                                    <span className={styles.description}>{option.description}</span>
                                                </div>
                                            </div>
                                            <img src="/icons/arrow_down16_32.svg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                {!selectedOption ? (
                    <div className={styles.wrap_buttons}>
                        <ButtonForCard
                            title_button="Назад"
                            sizeButton="size_button152"
                            onClick={handleBackSend}
                        />
                        <ButtonForCard
                            title_button="Далі"
                            sizeButton="size_button152"
                            onClick={() => {
                                console.log("Выбран тип комиссии:", selectedOption);
                            }}
                        />
                    </div>
                ) : ("")}
            </div>
        </div>
    );
}

export default CommissionType;