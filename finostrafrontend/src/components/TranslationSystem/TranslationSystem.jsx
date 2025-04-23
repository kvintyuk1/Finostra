import React from "react";
import styles from "./translationSystem.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function TranslationSystem({setIsConfirmed,setIsSend}) {
    const handleCloseTransferDetails = ()=>{
        setIsConfirmed(false);
    }
    const handleOpenResolutionNBU = ()=>{
        setIsSend(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrap_translation_system}>
                <div className={styles.block_system}>
                    <div className={styles.title_system}>Система переказу</div>
                    <div className={styles.item_system}>
                        <div className={styles.block_transfer}>
                            <img src="/img/western.png" alt=""/>
                            <div className={styles.wrap_transfer_commission}>
                                <div className={styles.name_trans}>WesternUnion</div>
                                <div className={styles.commission}>Комісія - <span className={styles.sum}>25 UAH</span>
                                </div>
                            </div>
                        </div>
                        <img src="/icons/arrow_out16white.svg" alt=""/>
                    </div>
                </div>
              <div className={styles.wrapper_buttons}>
                  <ButtonForCard
                      sizeButton="size_button152"
                      title_button="Назад"
                      onClick={handleCloseTransferDetails}
                  />
                  <ButtonForCard
                      sizeButton="size_button152"
                      title_button="Далі"
                      onClick={handleOpenResolutionNBU}
                  />
              </div>
            </div>
        </div>
    );
}

export default TranslationSystem;