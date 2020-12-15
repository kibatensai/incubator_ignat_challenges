import React, { SyntheticEvent, useState } from 'react'
import s from './NewMessage.module.css'

type  AddMessageFuncType = {
    addMessage: (msg: string) => void
}

const NewMessage = (props: AddMessageFuncType) => {

    let [msg, setMsg] = useState('')

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        props.addMessage(msg)

    }

    return (
        <form onSubmit={handleSubmit}
            className={s.newMsg}>
            <input className={s.input_msg}
                type='text'
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder='Type your message'>
            </input>
            <button className={s.send_msg}
                type='submit'>
                Send
            </button>
        </form>
    )
}

export default NewMessage