import React from "react";
import {Toolbar  } from 'devextreme-react';

interface NavBarComponentProps{
     opened:boolean,
     openNavBar:(opened:boolean) => void
}


const NavBarComponent:React.FC<NavBarComponentProps> = ({openNavBar,opened}):JSX.Element  => {


    const toolbarItems = () => {
        return [{
            widget: 'dxButton',
            location: 'before',
            options: {
                icon: 'menu',
                onClick: () => openNavBar(!opened)
            }
        }]
    }

    return (
            <div className="navbar">
                <Toolbar items={toolbarItems()} />
            </div>
    )

}
export default NavBarComponent
