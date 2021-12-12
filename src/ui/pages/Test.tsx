import React, {useState} from "react";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import SuperCheckbox from "../../common/components/SuperCheckbox/SuperCheckbox";
import SuperRadio from "../../common/components/SuperRadio/SuperRadio";
import SuperSelect from "../../common/components/SuperSelect/SuperSelect";

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