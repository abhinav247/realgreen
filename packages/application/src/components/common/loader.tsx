


import React, { useEffect, useState, Dispatch } from "react";
import {SelectBox,} from 'devextreme-react/select-box'




const Loader = (): JSX.Element => {
    return (
        <>
            <div className="ama_header row">
                <div className="col-lg-2">
                        <div className="header_dropdown">
                          <span>AMA</span>
                          <SelectBox items={['asd','asdsad']}/>
                        </div>
                </div>
                <div className="col-lg-8">

                </div>
            </div>

        </>
    )

}
export default Loader
