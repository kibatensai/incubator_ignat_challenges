import React, { ChangeEvent } from "react";
import Slider from '@material-ui/core/Slider'
import style from './SuperDoubleRange.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange?: (e: ChangeEvent<{}>, value: number | number[]) => void
    value: number | number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    

    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(e, value)
    }

    // сделать самому, можно подключать библиотеки

    return (
        <>
        <div className={style.super_double_range}>
            <Slider 
                    value={value}
                    min={0}
                    max={150}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
            />
        </div>
        </>
    );
}

export default SuperDoubleRange;



