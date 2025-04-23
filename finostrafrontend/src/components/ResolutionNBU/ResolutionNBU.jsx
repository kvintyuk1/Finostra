import React from "react";
import styles from "./resolutionNBU.module.css";

function ResolutionNBU() {
    return (
        <div className={styles.container}>
             <div className={styles.wrap_content}>
                 <img src="/icons/nbu.svg" alt=""/>
                 <div className={styles.text}>На підставі Постанови НБУ від 24.02.2022 №18 тимчасово обмежена відправка міжнародних переказів.</div>
             </div>
        </div>
    );
}

export default ResolutionNBU;