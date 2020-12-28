import React, { ChangeEvent, FC, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}



// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<boolean>(false); // need to fix any

    const sumOfMembers = (users: Array<UserType>) => {
        let result = users.length
        return result
    }

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value); // need to fix
    };
    const addUser = () => {
        // need to fix
        if (name === '') {
            setError(true)
        } else {
            setError(false)
            addUserCallback(name)
            alert('Welcome home, ' + name)
            setName('')
        }
    };

    const totalUsers = 'Current amout of users is: ' + sumOfMembers(users); // need to fix

    return (
        <div>
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
        </div>
    );
}

export default GreetingContainer;
