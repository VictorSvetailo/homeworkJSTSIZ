import React from 'react'
import styles from './Message.module.css'


export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: messageDataType) {
    return (
        <div className={styles.message}>
            <div className={styles.message__image}><img src={props.avatar} alt=""/></div>
            <div className={styles.message__block}>
                <h2>{props.name}</h2>
                <div className={styles.message__items}>
                    <p>{props.message}</p>
                    <p className={styles.message__time}>{props.time}</p>
                </div>
            </div>

        </div>
    )
}


export default Message
