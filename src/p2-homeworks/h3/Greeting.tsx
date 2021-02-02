import React, { ChangeEvent, FC } from "react";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input_styling // need to fix with (?:)


    return (
        <div>
            <SuperInputText value={name}
                placeholder={error ? `Please, enter your name :)` : ''}
                onChange={setNameCallback}
                className={inputClass} />
            <SuperButton className={s.add_button} onClick={addUser}>
                add
            </SuperButton>
            <div className={s.number_of_users}>{totalUsers}</div>
        </div>
    );
}

export default Greeting;
