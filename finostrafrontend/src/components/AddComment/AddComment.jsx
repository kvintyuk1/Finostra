import React from "react";
import styles from "./addComment.module.css";

function AddComment() {
    return (
        <div className={styles.container_comment}>
            <div className={styles.item_comment}>
                <div className={styles.title}>Додати коментар</div>
                <input type="text" className={styles.comment} placeholder="Ваш коментар"/>
            </div>
        </div>
    );
}

export default AddComment;