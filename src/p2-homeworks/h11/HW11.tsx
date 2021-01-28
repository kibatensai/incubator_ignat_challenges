import React, {ChangeEvent, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import style from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(15);
    const [value2, setValue2] = useState(100);
    const [superValue, setSuperValue] = useState<number[]>([value1, value2])

    const onChangeRangeSuperRange = (value: number) => {
        setValue1(value)
    }

    const onChangeRangeDoubleSuperRange = (e: ChangeEvent<{}>, newValue: number | number[]) => {
        setSuperValue(newValue as number[])
    }

    return (
        <div className={style.HW11_styling}>


            {/*should work (должно работать)*/}
            <div className={style.super_range}>
                <div className={style.super_range_value}>{value1}</div>
                <SuperRange
                    onChangeRange={onChangeRangeSuperRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
            
                <SuperDoubleRange
                    value={superValue}
                    onChangeRange={onChangeRangeDoubleSuperRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
