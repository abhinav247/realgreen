import React from 'react';
import {Button, IButtonOptions} from 'devextreme-react/button';
import './button.scss'

interface ButtonTypes extends IButtonOptions {
btn_type: string;
} 

const ButtonWrapper = (props:IButtonOptions): JSX.Element => {
    let className= '';
    if(props.type=='danger'){
        className = 'dx-button-danger';
    }
    console.log(className, 'className')
    return (
        <Button {...props} />
    )
}

export default ButtonWrapper;
