import React from 'react'


export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: messageDataType) {
    debugger
    return (
        <div>
            <img src={props.avatar} alt=""/>
            <h2>{props.name}</h2>
            <h3>{props.message}</h3>
            <h4>{props.time}</h4>
        </div>
    )
}

export default Message
