import React, { useContext } from "react";
import styles from "./addComment.module.css";
import { LanguageContext } from "../LanguageContext";
import { addCommentTranslations } from "./addCommentTranslations";

function AddComment({comment, setComment}) {
    const { selectedLanguage } = useContext(LanguageContext);
    const tComment = addCommentTranslations[selectedLanguage];

    return (
        <div className={styles.container_comment}>
            <div className={styles.item_comment}>
                <div className={styles.title}>{tComment.addCommentTitle}</div>
                <input 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className={styles.comment} 
                    placeholder={tComment.placeholder} 
                />
            </div>
        </div>
    );
}

export default AddComment;
