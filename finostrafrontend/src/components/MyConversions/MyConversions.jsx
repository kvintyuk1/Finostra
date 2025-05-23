import React, {useState} from "react";
import styles from "./myConversions.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";

function MyConversions({setShowKonvert}) {
    const [activeButton, setActiveButton] = useState('sent');
    const [showArchiv, setShowArchiv] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <div className={styles.wrap_title_switch}>
                    <div className={styles.name}>Мої конверти</div>
                    <SentReceivedSwitch
                        text_but_one="Власник"
                        text_but_two="Учасник"
                        widthContainer="width172"
                        active={activeButton}
                        onChange={setActiveButton}
                    />
                </div>
                {!showArchiv ? (
                    <>
                        {activeButton === 'sent' && (
                            <div className={styles.wrap_describe}>
                                <div className={styles.title}>Створюйте конверт та керуйте вашими витратами</div>
                                <div className={styles.description}>Щоб ефективно розподілити бюджет або накопичити
                                    кошти на
                                    мрію.
                                </div>
                            </div>
                        )}
                        {activeButton === 'received' && (
                            <div className={styles.wrap_describe}>
                                <div className={styles.title}>Тут відображатимуться конверти, за якими ви є Учасником
                                </div>
                                <div className={styles.description}>Приймайте запрошення від інших людей, ставайте
                                    учасником та
                                    долучайтеся до зборів коштів.
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className={styles.wrap_describe}>
                        <div className={styles.title}>Тут відображатимуться ваші архіви Конвертів</div>
                        <div className={styles.description}>Заархівуйте конверт, і він з'явиться тут.</div>
                    </div>
                )}
            </div>
            <div className={styles.wrap_buttons}>
                <ButtonForCard
                    img="/icons/add_konvert.svg"
                    title_button="Створити конверт"
                    sizeButton="size_button200"
                    onClick={() => setShowKonvert(false)}
                />
                <ButtonForCard
                    img="/icons/download16.svg"
                    title_button="Архів"
                    sizeButton="size_button103"
                    onClick={() => setShowArchiv(true)}
                />
            </div>
        </div>
    );
}

export default MyConversions;