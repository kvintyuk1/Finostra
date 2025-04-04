import React from "react";
import styles from "./questions.module.css";

function Questions({questionsData, sizeContent="height_content613",sizeWrapper="height_wrap539"}) {
    return (
        <div className={`${styles.container} ${styles[sizeContent]}`}>
            <div className={`${styles.wrapper_info} ${styles[sizeWrapper]}`}>
                <div className={styles.title}>Поширені запитання</div>
                {
                    questionsData.map(({question,img},index)=> (
                        <div key={index} className={styles.wrapper_questions}>
                            <div className={styles.question_img}>
                                <span className={styles.question}>{question}</span>
                                <img src={`/icons/${img}.svg`} alt=""/>
                            </div>
                            <div className={styles.line}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Questions;