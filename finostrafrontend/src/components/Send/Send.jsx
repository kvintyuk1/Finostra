import React, {useEffect, useState} from "react";
import styles from "./send.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function Send({setIsConfirmed,isSum,setIsSum,isCurrency,setIsCurrency,isCountry,setIsCountry}) {
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({
        isSum:false,
        isCurrency:false,
        isCountry:false
    });

    const validateForm = ()=>{
        const newErrors = {};
        if(!isSum || isNaN(isSum) || Number(isSum) <=0) {
            newErrors.isSum = "Введіть коректну суму більше 0"
        }
        if(!isCurrency){
            newErrors.isCurrency = "Оберіть валюту"
        }
        if(!isCountry){
            newErrors.isCountry = "Оберіть страну"
        }
        return newErrors;
    }

    const handleOpenTransferDetails = ()=>{
        setTouched({
            isSum:true,
            isCurrency:true,
            isCountry:true
        });
        const newErrors = validateForm({isSum,isCurrency,isCountry});
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
            setIsConfirmed(true);
        }
    };

    useEffect(() => {
       const newErrors = validateForm({isSum,isCurrency,isCountry});
       setErrors(newErrors)
    }, [isSum,isCurrency,isCountry]);

    const isFormValid = Object.keys(errors).length === 0;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_send}>
                <div className={styles.title}>Надіслати</div>
                <div className={styles.wrapper_info}>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>Сума переказу</div>
                        <input type="text"
                               className={styles.send_input}
                               placeholder="Введіть значення"
                               value={isSum}
                               onChange={(e)=>setIsSum(e.target.value)}
                               onBlur={()=>setTouched(prev =>({...prev,isSum:true}))}
                        />
                        {touched.isSum && errors.isSum && (
                            <div className={styles.error}>{errors.isSum}</div>
                        )}
                    </div>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>Валюта переказу</div>
                        <select className={styles.valuta_select}
                                value={isCurrency}
                                onChange={(e)=>setIsCurrency(e.target.value)}
                                onBlur={()=>setTouched(prev=>({...prev,isCurrency: true}))}
                        >
                            <option>Оберіть</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>PLN</option>
                        </select>
                        {touched.isCurrency && errors.isCurrency && (
                            <div className={styles.error}>{errors.isCurrency}</div>
                        )}
                    </div>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>Країна одержання</div>
                        <select className={styles.country_select}
                                value={isCountry}
                                onChange={(e)=>setIsCountry(e.target.value)}
                                onBlur={()=>setTouched(prev=>({...prev,isCountry: true}))}
                        >
                            <option>Оберіть</option>
                            <option>Америка</option>
                            <option>Европа</option>
                            <option>Англія</option>
                            <option>Польща</option>
                        </select>
                        {touched.isCountry && errors.isCountry && (
                            <div className={styles.error}>{errors.isCountry}</div>
                        )}
                    </div>
                </div>
            </div>
            <ButtonForCard
                title_button="Надіслати"
                sizeButton="size_button186"
                isActive={isFormValid}
                onClick={handleOpenTransferDetails}
            />
        </div>
    );
}

export default Send;