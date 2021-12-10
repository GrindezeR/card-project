import React, {useState} from "react";
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperRadio from "../common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../common/c5-SuperSelect/SuperSelect";

export const Test = () => {
    const arr = ['a', 'b', 'c'];
    const [value, onChangeOption] = useState(arr[0]);

    return (
        <div>
            <SuperInputText/>
            <SuperButton>
                Normal
            </SuperButton>
            <SuperButton red>
                Delete
            </SuperButton>
            <SuperCheckbox/>
            <SuperRadio value={value} onChangeOption={onChangeOption} options={arr}/>
            <SuperSelect options={arr}/>
        </div>
    );
}