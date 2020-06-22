
import React from 'react';
import NumberBox from 'devextreme-react/number-box';
import {NumberInputProps} from './types';

const NumberInput = (props:NumberInputProps):JSX.Element => {
        return (
            <NumberBox {...props}/>
        )
}

export default NumberInput;


