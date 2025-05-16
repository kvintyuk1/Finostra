import React, {useState} from "react";
import styles from "./openDeposit.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Warning from "../../../components/Warning/Warning";
import DepositTools from "../../../components/DepositTools/DepositTools";
import DepositName from "../../../components/DepositName/DepositName";
import DepositInCurrency from "../../../components/DepositInCurrency/DepositInCurrency";

function OpenDeposit() {
    const [selectedDeposit, setSelectedDeposit] = useState("conditions");

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <TransferToCardInfo
                    img="percent37"
                    title="Депозити"
                    subtitle="Керуйте своїми депозитами онлайн"
                />
                <Breadcrumbs/>
                <DepositTools
                    selectedDeposit={selectedDeposit}
                    setSelectedDeposit={setSelectedDeposit}
                />
                <DepositInCurrency/>
                <DepositName
                    title="Стандарт"
                    description="Класичний вклад на вибраний строк з можливостю поповнення та
                            щомісячними %"
                />
                <DepositName
                    title="Слава Героям"
                    description="Спеціальний вклад для героїчних захисників захисниць України"
                    new_container="height_container236"
                    new_wrapper_content="height_wrapper_content176"
                    new_wrap_description="height_wrap_description176"
                    show={false}
                    show_table={false}
                    show_button={false}
                />
                <DepositName
                    title="Фіноста-вклад"
                    description="Вільне поповнення та зняття коштів у будь-який день
                                 після дати відкриття вкладу"
                    new_container="height_container236"
                    new_wrapper_content="height_wrapper_content176"
                    new_wrap_description="height_wrap_description176"
                    show={false}
                    show_table={false}
                    show_button={false}
                />
            </div>
            <Warning/>
        </div>
    );
}

export default OpenDeposit;