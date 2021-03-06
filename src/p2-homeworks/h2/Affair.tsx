import React from "react";
import { AffairType } from "./HW2";
import s from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType,  // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) };// need to fix

    return (
        <div className={s.aff_container}>
            <div className={s.aff_box}>
                <div className={s.aff_name}>
                    {props.affair.name}
                </div>
                <span> priority: <i>{props.affair.priority}</i></span>
                <div>
                    <SuperButton className={s.delete_button} onClick={deleteCallback}>X</SuperButton>
                </div>

            </div>
        </div>
    );
}

export default Affair;
