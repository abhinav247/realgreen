import Footer from './Footer';
import Header from './Header';
import NavBar from './Navbar';
import React, {useState } from 'react';
import Box, {Item} from 'devextreme-react/box';
// import { FullPageLoader } from '../../common/components';
import { RouteProps } from 'react-router-dom';
import {SideBar} from './navlist';

const Base: React.FC = (props: RouteProps): JSX.Element => {

 const [opened, setOpened] = useState<boolean>(false);

 const openNavList = (value:boolean) =>{
         setOpened(value);
 }

  return (
     <>
       <Box direction="col" width="100%" height="100vh">
          <Item ratio={0.7}>
             <Header />
          </Item>
          <Item ratio={10} >
             <Box direction="row" height="100vh">
               <Item ratio={0.5}>
                   <NavBar openNavBar={openNavList} opened={opened}/>
               </Item>
               <Item ratio={1} visible={true} >
                     <SideBar opened={opened}/>
               </Item>
               <Item ratio={11.5}  >
                    <div className="content">
                       {props.children}
                     </div>
               </Item>
             </Box>
          </Item>
          <Item ratio={1}>
             <Footer/>
          </Item>
        </Box>
      </>
  );
};

export default Base;
