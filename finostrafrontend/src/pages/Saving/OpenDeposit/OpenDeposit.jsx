import React, {useState} from "react";
import styles from "./openDeposit.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Warning from "../../../components/Warning/Warning";
import DepositTools from "../../../components/DepositTools/DepositTools";
import DepositName from "../../../components/DepositName/DepositName";
import DepositInCurrency from "../../../components/DepositInCurrency/DepositInCurrency";
import InfoAboutDeposit from "../../../components/InfoAboutDeposit/InfoAboutDeposit";
import CurrencySwitch from "../../../components/CurrencySwitch/CurrencySwitch";
import DepositAmount from "../../../components/DepositAmount/DepositAmount";
import Deposit from "../../../components/Deposit/Deposit";

function OpenDeposit({new_slider_sum,new_wrapper_slider_sum,new_background,new_background_slider_sum}) {
    const [selectedDeposit, setSelectedDeposit] = useState("conditions");
    const [showWarning, setShowWarning] = useState(true);

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
                {selectedDeposit === "conditions" && (
                    <>
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
                    </>
                )}
                {selectedDeposit === "calculator" && (
                    <>
                        <div className={styles.wrap_currencySwitch}>
                            <div className={styles.wrap_content}>
                                <CurrencySwitch
                                    text_but_one="Гривня"
                                    text_but_two="Доллар США"
                                    text_but_three="Євро"
                                />
                            </div>
                        </div>
                        <InfoAboutDeposit
                            new_slider_sum={new_slider_sum}
                            new_wrapper_slider_sum={new_wrapper_slider_sum}
                            new_background={new_background}
                            new_background_slider_sum={new_background_slider_sum}
                        />
                    </>
                )}
                {selectedDeposit === "compare" && (
                    <>
                        <div className={styles.wrap_currencySwitch}>
                            <div className={styles.wrap_content}>
                                <CurrencySwitch
                                    text_but_one="Гривня"
                                    text_but_two="Доллар США"
                                    text_but_three="Євро"
                                />
                            </div>
                        </div>
                        <DepositAmount
                            new_container="width_container1110"
                            new_background_container="background_container_black"
                            new_title="width_title1050"
                            new_slider_sum="width_slider_sum860"
                            new_wrapper_slider_sum="width_wrapper_slider_sum1050"
                            new_background="background_sum_currency_grey"
                            new_background_slider_sum="background_slider_sum_black"
                        />
                        <Deposit/>
                        <DepositName
                            title="Стандарт"
                            description="Класичний вклад на вибраний строк з можливостю поповнення та
                            щомісячними %"
                            new_container="height_container444"
                            new_height_wrap_table="height_wrap_table384"
                            new_wrapper_content="height_wrapper_content384"
                            new_gap_wrapper_content="gap_wrapper_content30"
                            new_width_wrap_description="width_wrap_description647"
                            new_describe_nowrap="describe_nowrap"
                            type="second"
                            show_column={false}
                            show_wrapper_buttons={false}
                        />
                        <DepositName
                            title="Слава Героям"
                            description="Спеціальний вклад для героїчних захисників захисниць України"
                            new_container="height_container220"
                            new_wrapper_content="height_wrapper_content160"
                            new_wrap_description="height_wrap_description160"
                            new_gap_wrapper_content="gap_wrapper_content30"
                            new_width_wrap_description="width_wrap_description647"
                            new_describe_nowrap="describe_nowrap"
                            show_column={false}
                            type="second"
                            limit={2}
                            show={false}
                            show_table={false}
                            show_button={false}
                            show_wrapper_buttons={false}
                        />
                        <DepositName
                            title="Фіноста-вклад"
                            description="Вільне поповнення та зняття коштів у будь-який день
                                 після дати відкриття вкладу"
                            new_container="height_container242"
                            new_wrapper_content="height_wrapper_content182"
                            new_wrap_description="height_wrap_description182"
                            new_gap_wrapper_content="gap_wrapper_content30"
                            new_width_wrap_description="width_wrap_description647"
                            new_describe_nowrap="describe_nowrap"
                            type="second"
                            limit={2}
                            show_column={false}
                            show={false}
                            show_table={false}
                            show_button={false}
                            show_wrapper_buttons={false}
                        />
                    </>
                )}
                {(selectedDeposit === "conditions" || selectedDeposit === "compare") && (
                    <Warning/>
                )}
            </div>
        </div>
    );
}

export default OpenDeposit;