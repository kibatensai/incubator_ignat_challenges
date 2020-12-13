import React, { useState } from "react";
import Message from './Message'
import NewMessage from './components/NewMessage/NewMessage'

let today = new Date()
let currentTime = today.getMinutes() < 10
    ? today.getHours() + ':0' + today.getMinutes()
    : today.getHours() + ':' + today.getMinutes()

function HW1() {

    let [messageData, setMessageData] = useState({
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Some Name",
        message: "some text",
        time: currentTime,
    })

    const addMessage = (msg: string) => {
        setMessageData({
            avatar: messageData.avatar,
            name: messageData.name,
            message: msg,
            time: messageData.time
        })
    }

    return (
        <div>
            <hr />
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <NewMessage addMessage={addMessage} />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr />
        </div>
    );
}

export default HW1;
