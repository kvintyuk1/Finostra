import React, {useState} from "react";
import styles from "./collapsibleText.module.css";

function CollapsibleText({title,text,description,maxLength = 100}) {
    const [isExpanded,setIsExpanded] = useState(false);

    const toggleExpand = ()=> setIsExpanded(!isExpanded)

    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
          <div className={styles.description}>
              {isExpanded ? description : description.slice(0,maxLength) + "..."}
          </div>
                <button onClick={toggleExpand} className={styles.but_style}>
                    <div className={styles.text_but}>
                        {isExpanded ? "Приховати" : "Читати повністю"}
                        <img src="/icons/arrow_outlined.svg" alt=""/>
                    </div>
                </button>
        </div>
    );
}

export default CollapsibleText;