import React from "react";
import s from './Message.module.css'

export type MessageDataPropType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageDataPropType) {
    return (
        <div className={s.msg_container}>
            <div className={s.msg_avatar}>
                <img src={props.avatar} alt='avatar'></img>
            </div>
            <div className={s.msg_name}>
                {props.name}
            </div>
            <div className={s.msg}>
                {props.message}
                <span className={s.msg_timestamp}>
                    {props.time}
                </span>
            </div>


        </div>
    );
}

export default Message;
