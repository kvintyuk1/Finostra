import React from "react";
import styles from "./filesDetails.module.css";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function FilesDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <SentReceivedSwitch
                    text_but_one="Заповнити вручну"
                    text_but_two="Завантажити реквізити"
                    widthContainer="width359"
                />
                <div className={styles.wrap_file_details}>
                    <div className={styles.wrap_item_file}>
                        <div className={styles.wrap_file_download}>
                            <div className={styles.wrap_title_description}>
                               <span className={styles.title}>Файл з реквізитами</span>
                               <span className={styles.description}>
                                   Прикладіть зображення (відскановану
                                   копію) документа з реквізитами SWIFT-платежу. Формат: .jpg .png .tiff.pdf
                               </span>
                            </div>
                            <button className={styles.wrapper_button}>
                              <div className={styles.button_content}>
                                  <img src="/icons/download14.svg" alt=""/>
                                  <span className={styles.name_button}>Завантажити документ</span>
                              </div>
                            </button>
                        </div>
                        <div className={styles.wrap_transfer_details}>
                            <span className={styles.name}>Реквізити переказу</span>
                            <input type="text" className={styles.input} placeholder="Введіть значення"/>
                            <img src="/icons/information.svg" className={styles.input_img} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.wrap_buttons}>
                    <ButtonForCard
                        title_button="Назад"
                        sizeButton="size_button152"
                    />
                    <ButtonForCard
                        title_button="Далі"
                        sizeButton="size_button152"
                    />
                </div>
            </div>
        </div>
    );
}

export default FilesDetails;