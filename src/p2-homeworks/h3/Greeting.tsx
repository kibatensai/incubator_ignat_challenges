import React, { ChangeEvent, FC } from "react";
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
    const inputClass = s.error // need to fix with (?:)


    return (
        <div>
            <input value={name}
                placeholder={error ? `Please, enter your name :)` : ''}
                onChange={setNameCallback}
                className={`${error ? inputClass : s.input_styling}`} />
            <button className={s.add_button} onClick={addUser}>add</button>
            <div className={s.number_of_users}>{totalUsers}</div>
        </div>
    );
}

export default Greeting;
