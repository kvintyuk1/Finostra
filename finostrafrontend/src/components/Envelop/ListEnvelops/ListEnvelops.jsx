import React, { useEffect, useState } from 'react';
import styles from "./listEnvelops.module.css"
import { fetchAllEnvelops } from "../../../redux/slices/envelopSlice";

import { useDispatch, useSelector } from 'react-redux';
import ItemEnvelop from '../itemEnvelop/ItemEnvelop';

export default function ListEnvelops() {

    const dispatch = useDispatch();
    const { envelops, status, error, message } = useSelector(state => state.envelop);

    useEffect(() => {
        dispatch(fetchAllEnvelops())
    }, [dispatch]);

    return (
        <div className={styles.wrapper_envelops}>
            <div className={styles.header}>
                <span className={styles.header_title}>Мої конверти</span>
                <div className={styles.tabs}>
                    <span className={styles.tab_active}>
                        Власник
                    </span>
                    <span className={styles.tab}>Учасник</span>
                </div>
            </div>
            <div className={styles.body}>

                {
                    envelops.length === 0 ? (
                        <div className={styles.body_description}>
                            <p>Створюйте конверт та керуйте вашими витратами</p>
                            <p>Щоб ефективно розподілити бюджет або накопичити кошти на мрію.</p>
                        </div>
                    ) : (
                        <div className={styles.body_list_envelops}>
                            {envelops.map((envelope) => (
                                <ItemEnvelop key={envelope.id} {...envelope} />
                            ))}
                        </div>
                    )
                }




                <div className={styles.body_buttons}>
                    <button>
                        <div>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 19.25C5.175 19.25 1.25 15.325 1.25 10.5C1.25 5.675 5.175 1.75 10 1.75C14.825 1.75 18.75 5.675 18.75 10.5C18.75 15.325 14.825 19.25 10 19.25ZM10 3C5.8625 3 2.5 6.3625 2.5 10.5C2.5 14.6375 5.8625 18 10 18C14.1375 18 17.5 14.6375 17.5 10.5C17.5 6.3625 14.1375 3 10 3Z" fill="white" />
                                <path d="M10 14.875C9.65 14.875 9.375 14.6 9.375 14.25V6.75C9.375 6.4 9.65 6.125 10 6.125C10.35 6.125 10.625 6.4 10.625 6.75V14.25C10.625 14.6 10.35 14.875 10 14.875Z" fill="white" />
                                <path d="M13.75 11.125H6.25C5.9 11.125 5.625 10.85 5.625 10.5C5.625 10.15 5.9 9.875 6.25 9.875H13.75C14.1 9.875 14.375 10.15 14.375 10.5C14.375 10.85 14.1 11.125 13.75 11.125Z" fill="white" />
                            </svg>
                            <span>Створити конверт</span>
                        </div>
                    </button>
                    <button>
                        <div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 7.077C7.858 7.077 7.739 7.12467 7.643 7.22C7.547 7.31533 7.49933 7.43433 7.5 7.577V11.777L5.754 10.031C5.66067 9.93767 5.546 9.88767 5.41 9.881C5.274 9.87433 5.15267 9.92433 5.046 10.031C4.93933 10.1377 4.886 10.2557 4.886 10.385C4.886 10.5143 4.93933 10.6323 5.046 10.739L7.434 13.127C7.596 13.2883 7.78467 13.369 8 13.369C8.21533 13.369 8.404 13.2883 8.566 13.127L10.954 10.739C11.0473 10.645 11.0973 10.53 11.104 10.394C11.1107 10.258 11.0607 10.137 10.954 10.031C10.8473 9.925 10.7293 9.87167 10.6 9.871C10.4707 9.87033 10.3527 9.92367 10.246 10.031L8.5 11.777V7.577C8.5 7.435 8.45233 7.316 8.357 7.22C8.26167 7.124 8.14267 7.07633 8 7.077ZM1 4.307V14.885C1 15.0643 1.05767 15.2117 1.173 15.327C1.28833 15.4423 1.436 15.5 1.616 15.5H14.385C14.5643 15.5 14.7117 15.4423 14.827 15.327C14.9423 15.2117 15 15.0643 15 14.885V4.308L1 4.307ZM1.77 16.5C1.322 16.5 0.915 16.317 0.549 15.951C0.183 15.585 0 15.1783 0 14.731V3.986C0 3.79133 0.0309999 3.608 0.0929999 3.436C0.155 3.264 0.248333 3.10567 0.373 2.961L1.931 1.091C2.07567 0.895667 2.25667 0.748333 2.474 0.649C2.69133 0.549667 2.92433 0.5 3.173 0.5H12.789C13.037 0.5 13.273 0.549667 13.497 0.649C13.721 0.748333 13.9053 0.895333 14.05 1.09L15.627 3C15.7517 3.14467 15.845 3.30633 15.907 3.485C15.969 3.663 16 3.84967 16 4.045V14.73C16 15.1773 15.817 15.584 15.451 15.95C15.085 16.316 14.6783 16.499 14.231 16.499L1.77 16.5ZM1.38 3.308H14.6L13.27 1.71C13.2053 1.646 13.1313 1.595 13.048 1.557C12.9647 1.519 12.878 1.5 12.788 1.5H3.192C3.10267 1.5 3.016 1.51933 2.932 1.558C2.848 1.59667 2.77467 1.648 2.712 1.712L1.38 3.308Z" fill="white" fill-opacity="0.7" />
                            </svg>
                            <span>Архів</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )

}