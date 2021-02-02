import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some', 'custom'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.theme); // useSelector
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio name={"radio"}
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}/>
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
