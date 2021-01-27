import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useSelector, useDispatch} from 'react-redux'
import { loadingAC } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import { Preloader } from "./Preloader/Preloader";
import style from '../h10/bll/HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector((state: AppStoreType) => state.loading.isLoading)
    
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        // dispatch
        // setTimeout
        console.log("loading...");
    };

    return (
        <div className={style.hw10_styling}>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Preloader />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    );
}

export default HW10;
