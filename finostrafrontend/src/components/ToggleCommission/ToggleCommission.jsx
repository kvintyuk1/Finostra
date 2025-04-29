import React, {useState} from "react";
import styles from "./toggleCommission.module.css";

function ToggleCommission() {
    const [enabled,setEnabled] = useState(true);
    return (
        <button className={`${styles.container} ${enabled ? styles.enabledContainer : styles.notEnabledContainer}`}
                onClick={()=>setEnabled(!enabled)}
        >
             <div className={`${styles.toggle}
                  ${enabled ? styles.enabled : styles.notEnabled}`}
             ></div>
        </button>
    );
}

export default ToggleCommission;