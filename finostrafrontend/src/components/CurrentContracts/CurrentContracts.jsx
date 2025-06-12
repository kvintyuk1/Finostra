import React, { useContext, useEffect } from "react";
import styles from "./currentContracts.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { LanguageContext } from "../LanguageContext";
import { currentContractsTranslations } from "./currentContractsTranslations";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContracts } from "../../redux/slices/creditCardSlice";

function CurrentContracts() {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = currentContractsTranslations[selectedLanguage];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { allContracts, fetchStatus, fetchError } = useSelector(state => state.creditCard);

    useEffect(() => {
        dispatch(fetchAllContracts());
    }, [dispatch]);

    const handleClick = () => navigate("/");

    const getIdentifier = url => {
        try {
            const file = url.split("/").pop().split("?")[0]; 
            const id = file.replace(".pdf", "").slice(-8).toUpperCase();
            return id;
        } catch {
            return "";
        }
    };

    return (
        <div className={styles.container}>
            <img src="/img/contracts.png" alt="Contracts" />
            <ButtonForCard
                title_button={t.buttonTitle}
                sizeButton="size_button173"
                onClick={handleClick}
            />
            <div className={styles.contractsList}>
                {fetchStatus === "loading" && <p>Loading contracts...</p>}
                {fetchError && <p className={styles.error}>{fetchError}</p>}
                {fetchStatus === "succeeded" && (!allContracts || allContracts.length === 0) && (
                    <p>No contracts found.</p>
                )}
                {fetchStatus === "succeeded" && allContracts?.length > 0 && (
                    <ul className={styles.list}>
                        {allContracts.map((link, idx) => (
                            <li key={idx} className={styles.item}>
                                <span className={styles.label}>{`Contract ${getIdentifier(link)}`}</span>
                                <a
                                    className={styles.download}
                                    href={link}
                                    download={`contract_${idx + 1}.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.download || "Download"}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CurrentContracts;
