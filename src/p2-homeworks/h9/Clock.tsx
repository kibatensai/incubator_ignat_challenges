import React, { useMemo, useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
        // show
    };
    const onMouseLeave = () => {
        setShow(false)
        // close
    };

    const stringTime = useMemo(() => {
        const time = new Date().toLocaleTimeString()
        return time
    }, [date]); // fix with date
    const stringDate = new Date().toDateString(); // fix with date

    return (
        <div className={style.wrapper}>
            <div className={style.clock_container}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div>
                    {stringTime}
                </div>
                    {show && (
                    <div className={style.clock_date}>
                        {stringDate}
                    </div>
                )}
                
            </div>

            <div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
