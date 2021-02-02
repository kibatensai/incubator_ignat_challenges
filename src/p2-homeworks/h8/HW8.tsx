import React, {useState} from "react";
import {CheckAgeAC, homeWorkReducer, SortNamesAC } from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from './HW8.module.css'

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id} className={style.list_item}>
          Имя: {p.name}, Возраст: {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortNamesAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortNamesAC('down')))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, CheckAgeAC(18)))

    return (
        <div className={style.hw8_styling}>


            {/*should work (должно работать)*/}
        <div className={style.list}>
            {finalPeople}
        </div>
        <div>
            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={checkAge}>check 18</SuperButton>
        </div>
            


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    );
}

export default HW8;
