import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

const arr = ["x", "y", "z"];
const testArr = ['1', '2', '3', '4']

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);
    const [selected, setSelected] = useState<any>(testArr[0])
   

    return (
        <div>

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={testArr}
                    value={selected}
                    onChangeOption={setSelected}
                />
            </div>

            
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
         
        </div>
    );
}

export default HW7;
