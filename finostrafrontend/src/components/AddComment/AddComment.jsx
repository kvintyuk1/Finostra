import React, { useContext } from "react";
import styles from "./addComment.module.css";
import { LanguageContext } from "../LanguageContext";
import { addCommentTranslations } from "./addCommentTranslations";

function AddComment() {
    const { selectedLanguage } = useContext(LanguageContext);
    const tComment = addCommentTranslations[selectedLanguage];

    return (
        <div className={styles.container_comment}>
            <div className={styles.item_comment}>
                <div className={styles.title}>{tComment.addCommentTitle}</div>
                <input 
                    type="text" 
                    className={styles.comment} 
                    placeholder={tComment.placeholder} 
                />
            </div>
        </div>
    );
}

export default AddComment;
