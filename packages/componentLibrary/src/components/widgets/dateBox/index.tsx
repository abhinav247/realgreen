import React from 'react';
import { DateBox, IDateBoxOptions} from 'devextreme-react/date-box';
import './datebox.scss'

interface DateBoxTypes extends IDateBoxOptions {

}

const DateBoxWrapper= (props:IDateBoxOptions): JSX.Element => {
    return (
        // <div className="dx-fieldset">
        // <div className="dx-field">
            // <div className="dx-field-value">
                <DateBox {...props}/>
            // </div>
        // </div>
        // </div>
    )
}

export default DateBoxWrapper;