import React, {useEffect, useState} from "react";
import styles from "./creditCar.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Questions from "../../../components/Questions/Questions";
import PaymentLimitInstallments from "../../../components/PaymentLimitInstallments/PaymentLimitInstallments";
import LimitFilter from "../../../components/LimitFilter/LimitFilter";
import {useOutletContext} from "react-router-dom";
import {useDispatch} from "react-redux";
import {carForCredit} from "../../../redux/slices/creditCardSlice";

const questionsData5 = [
    {question: "Що потрібно для оформлення послуги «Авто в кредит»?", img: "arrow_down16"},
    {question: "Як відбувається процедура оформлення кредиту?", img: "arrow_down16"},
    {question: "Чи будуть нотаріально підписані документи на оформлення?", img: "arrow_down16"},
    {question: "Чи може інша людина погасити мою заборгованість?", img: "arrow_down16"},
    {question: "Як відбувається дострокове погашення? Чи можна погасити договір достроково?", img: "arrow_down16"},
    {question: "Чи можу я виїжджати машиною за межі України, якщо кредит ще не виплачено?", img: "arrow_down16"},
];

function CreditCar() {
    const [active, setActive] = useState("but_one");
    const [activeButton, setActiveButton] = useState("sent");
    const {creditLimit, setCreditLimit, isEditing, setIsEditing} = useOutletContext();
    const [carPrice, setCarPrice] = useState(150000);
    const [downPayment, setDownPayment] = useState(38000);
    const [activeTerm, setActiveTerm] = useState(60);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const [userRate, setUserRate] = useState(0); // или получи с backend или props
    const [carType, setCarType] = useState("IN_USE"); // зависит от кнопки (З пробігом/Нове)
    const [years, setYears] = useState(5); // = activeTerm / 12, если это в месяцах
    const [monthLoan, setMonthLoan] = useState(activeTerm); // тоже на основе activeTerm
    const [onceCommission, setOnceCommission] = useState(0);
    const [creditPercentage, setCreditPercentage] = useState(18.0);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!activeTerm || carPrice <= 0) {
            setMonthlyPayment(0);
            return;
        }
        const principal = carPrice - downPayment;
        if (principal <= 0) {
            setMonthlyPayment(0);
            return;
        }
        const monthlyRate = 0.18 / 12;
        const n = Number(activeTerm);
        const numerator = monthlyRate * Math.pow(1 + monthlyRate, n);
        const denominator = Math.pow(1 + monthlyRate, n) - 1;
        const payment = principal * (numerator / denominator);
        setMonthlyPayment(payment);
    }, [carPrice, downPayment, activeTerm]);

    const infoCreditData2 = [
        {title: "Разова комісія", number: "0 UAH"},
        {title: "Ставка за кредитом", number: "18.00%"},
        {title: "Щомісячний платіж", number: monthlyPayment.toFixed(2) + " UAH"},
    ]

    const handleCreditLimitChange = (newLimit) => {
        setCreditLimit(newLimit);
    };
    const toggleEditing = () => {
        setIsEditing((prev) => !prev);
    };
    const handleSubmitCarCredit = async () => {
        console.log('Submitting car credit with data:', {
            carPrice,
            userRate,
            carType,
            years,
            monthLoan,
            onceCommission,
            creditPercentage,
            monthlyPayment: Number(monthlyPayment.toFixed(2))
        });
        const creditData = {
            carPrice,
            userRate,
            carType,
            years,
            monthLoan,
            onceCommission,
            creditPercentage,
            monthlyPayment: Number(monthlyPayment.toFixed(2))
        };

        const resultAction = await dispatch(carForCredit(creditData));
        console.log('Result action:', resultAction);

        if (carForCredit.fulfilled.match(resultAction)) {
            const blob = resultAction.payload;
            // const url = window.URL.createObjectURL(blob);
            window.open(blob, '_blank');

        } else {
            console.error('Error payload:', resultAction.payload);
            const errorMsg = resultAction.payload || "Помилка при відправці заявки на кредит";
            alert(errorMsg);
        }
    };



    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="car32"
                title="Авто в кредит"
                subtitle="Стежте за залишком, умовами та сплачуйте кредити зручно."
            />
            <PaymentLimitInstallments
                text_but_one="Оформлення"
                text_but_two="Договори"
                widthContainer="width211"
                title_info="Не вистачає на автомобіль? Оформіть “Авто в кредит”!"
                heightContainer="height594"
                rate="Річна ставка"
                ratePercent="від 0.01%"
                term="Строк кредиту"
                termCredit="До 5 років"
                hideAvailableLimit={true}
                hideButton={true}
                hideLineVerticalDotted={true}
                widthPay="widthPayNow421"
                gapPayNow="gapPayNow0"
                widthWrapperInfo="widthWrapperInfo421"
                heightWrapperInfo="heightWrapperInfo487"
                gapContainer="gap251"
                widthWrapRate="widthRate95"
                showSumCredit={true}
                infoCreditData={infoCreditData2}
                hideInfoSumCredit={false}
                hideInfoTermCredit={true}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                name="Вартість авто"
                info="150 000"
                name2="Ваш аванс"
                info2="38 000"
                heightSumCreditContainer="height421"
                heightWrapSumCredit="heightWrap272"
                marginContainer="marginTop66"
                sizeButton="size_button193"
                title_button="Подати заявку"
                value={downPayment}
                min
                max
                initialValue
                leftLabel
                rightLabel
                customLabel
                carPrice={carPrice}
                setCarPrice={setCarPrice}
                downPayment={downPayment}
                setDownPayment={setDownPayment}
                handleSubmitCarCredit={handleSubmitCarCredit}
                customContent={
                    <div className={styles.wrapper_content}>
                        <div className={styles.wrapper_buttons}>
                            <button
                                className={`${styles.but_one} ${active === "but_one" ? styles.active : styles.inactive}`}
                                onClick={() => {
                                    setActive("but_one");
                                    toggleEditing();
                                    setCarType("IN_USE");
                                }}
                            >З пробігом
                            </button>
                            <button
                                className={`${styles.but_two} ${active === "but_two" ? styles.active : styles.inactive}`}
                                onClick={() => {
                                    setActive("but_two");
                                    toggleEditing();
                                    setCarType("NEW");
                                }}
                            >Нове
                            </button>

                        </div>
                        <div className={styles.wrapper_limitFilter}>
                            <LimitFilter
                                min="150000"
                                max="1500000"
                                initialValue="150000"
                                leftLabel="150 000"
                                rightLabel="1 500 000"
                                customLabel="Вартість авто"
                                hideRightLabel={true}
                                hideLabelSuffix={false}
                                showMinMaxBelow={true}
                                sizeLimit="widthLimit72"
                                value={carPrice}
                                onChange={(val) => setCarPrice(val)}
                                disabled={!isEditing}
                            />
                            <LimitFilter
                                min="0"
                                max="50000"
                                initialValue="0"
                                leftLabel="15 000"
                                rightLabel="50 000"
                                customLabel="Ваш аванс"
                                hideRightLabel={true}
                                hideLabelSuffix={false}
                                showMinMaxBelow={true}
                                sizeLimit="widthLimit72"
                                value={downPayment}
                                onChange={(val) => setDownPayment(val)}
                                disabled={!isEditing}
                            />
                        </div>
                    </div>
                }
            />
            <Questions
                sizeContent="height_content491"
                sizeWrapper="height_wrap411"
                questionsData={questionsData5}
            />
        </div>
    );
}

export default CreditCar;

