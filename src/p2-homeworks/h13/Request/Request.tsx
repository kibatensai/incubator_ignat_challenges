import React, { useState } from 'react'
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox'
import { requestsAPI } from '../api/requestsAPI'
import s from './Request.module.css'

export const Request = () => {
    const [reqFlag, setReqFlag] = useState<boolean>(false)
    const [responseMessage, setResponseMessage] = useState<string>('')

    const request = () => {
        requestsAPI.postRequest(reqFlag)
            .then(response => {
                setResponseMessage(response.data && response.data.errorText)
            })
            .catch(error => {
                setResponseMessage(error.response ? error.response.data.errorText : error.message)
            })
    }

    return (
        <>
        <div className={s.requestContainer}>
            <SuperButton onClick={request}>
                Request
        </SuperButton>
            <SuperCheckbox onChange={() => setReqFlag(!reqFlag)} />
            <div className={s.responseStyling}>
                {responseMessage}
            </div>
        </div>
        </>
    )


}