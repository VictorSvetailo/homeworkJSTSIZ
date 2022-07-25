import React from 'react'
import Message from "./Message";
import {inspect} from "util";

const messageData = {
    avatar: 'https://inlnk.ru/0QXG0E',
    name: 'Victor Wayne',
    message: 'Hello how are you?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <h1>Homeworks 1</h1>
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
