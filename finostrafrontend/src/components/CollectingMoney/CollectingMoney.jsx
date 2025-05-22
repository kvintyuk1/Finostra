import React, {useState} from "react";
import styles from "./collectingMoney.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import Period from "../Period/Period";
import {useDispatch, useSelector} from "react-redux";
import {createEnvelop, fetchAllEnvelops} from "../../redux/slices/envelopSlice";

function CollectingMoney({setShowKonvert}) {
    const dispatch = useDispatch();
    const {createStatus,createError,message} = useSelector(state => state.envelop);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amountCapacity, setAmountCapacity] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [currency, setCurrency] = useState('UAH');

    const handleSubmit = async ()=>{
        const data = {name,description,amountCapacity: +amountCapacity,expiryDate,currency};
        try{
         await dispatch(createEnvelop(data)).unwrap();
         dispatch(fetchAllEnvelops());
         setShowKonvert(true);
        }catch(error){

        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrap_languages_button}>
                <ButtonForCard
                    title_button="UAH"
                    sizeButton="size_button68"
                    fontWeight="fontWeight400"
                />
                <ButtonForCard
                    title_button="USD"
                    sizeButton="size_button68"
                    fontWeight="fontWeight400"
                />
                <ButtonForCard
                    title_button="EUR"
                    sizeButton="size_button68"
                    fontWeight="fontWeight400"
                />
            </div>
            <div className={styles.wrapper_content}>
                <div className={styles.wrap_name}>
                    <div className={styles.wrap_title}>
                        <div className={styles.title}>Назва</div>
                        <input type="text" value={name}
                               onChange={e => setName(e.target.value)}
                               className={styles.input}
                               placeholder="Виберіть або напишіть назву"/>
                    </div>
                    <div className={styles.count}>0/45</div>
                </div>
                <div className={styles.wrap_sum_money_collected}>
                    <div className={styles.wrap_sum_input}>
                        <div className={styles.title_collected}>Сума збору</div>
                        <input type="number"  value={amountCapacity}
                               onChange={e => setAmountCapacity(e.target.value)}
                               className={styles.input_sum}
                               placeholder="00.00"/>
                    </div>
                    <div className={styles.wrap_info_collected}>
                        <div className={styles.info_collected}>
                            <img src="/icons/info_percent24.svg" alt=""/>
                            <div className={styles.title_info}>Після досягнення суми збору</div>
                        </div>
                        <div className={styles.description_info}>Ви можете продовжити накопичення або</div>
                        <div className={styles.description_info}>Вивести кошти з Конверта</div>
                    </div>
                </div>
                <div className={styles.wrap_additionally}>
                    <div className={styles.title_additionally}>Додатково</div>
                    <div className={styles.wrap_description}>
                        <div className={styles.title_description}>Опис</div>
                        <input type="text" value={description}
                               onChange={e => setDescription(e.target.value)}
                               className={styles.input}
                               placeholder="Напишіть опис"/>
                        <div className={styles.count}>0/300</div>
                    </div>
                </div>
                <div className={styles.wrap_date_finish}>
                    <div className={styles.wrap_data_input}>
                        <div className={styles.title_data}>Дата закінчення збору</div>
                        <Period
                            value={expiryDate}
                            onChange={(date)=>setExpiryDate(date)}
                            iconPosition="right"
                            sizePeriod="size447"
                            placeholder="Виберіть дату"
                        />
                    </div>
                    <div className={styles.wrap_data_buttons}>
                        <ButtonForCard
                            title_button="Місяць"
                            fontWeight="fontWeight400"
                            sizeButton="size_button68"
                        />
                        <ButtonForCard
                            title_button="Пів року"
                            fontWeight="fontWeight400"
                            sizeButton="size_button68"
                        />
                        <ButtonForCard
                            title_button="Рік"
                            fontWeight="fontWeight400"
                            sizeButton="size_button68"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.wrap_buttons}>
                <ButtonForCard
                    title_button="Назад"
                    sizeButton="size_button88"
                    onClick={()=>setShowKonvert(true)}
                />
                {createStatus === 'loading' && <p>Створення...</p>}
                {createError && <p>{createError}</p>}
                {message && <p>{message}</p>}
                <ButtonForCard
                    type="button"
                    title_button="Продовжити"
                    sizeButton="size_button128_39"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
}

export default CollectingMoney;