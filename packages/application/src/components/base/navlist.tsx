import React from 'react';
import List from 'devextreme-react/list';
import Drawer from 'devextreme-react/drawer';


const navigation = [
  { id: 1, text: 'Products', icon: 'product' },
  { id: 2, text: 'Sales', icon: 'money' },
  { id: 3, text: 'Customers', icon: 'group' },
  { id: 4, text: 'Employees', icon: 'card' },
  { id: 5, text: 'Reports', icon: 'chart' }
]


const NavigationList = () => {
  return (
    <div className="list" style={{ width: '400px' }}>
      <List
        dataSource={navigation}
        hoverStateEnabled={true}
        activeStateEnabled={true}
        focusStateEnabled={true}
        elementAttr={{ class: 'panel-list dx-theme-accent-as-background-color' }} />
    </div>
  )
}


export const SideBar: React.FC<{ opened: boolean }> = ({ opened }): JSX.Element => {
  return (
    <Drawer
      openedStateMode={"overlap"}
      position={"left"}
      revealMode={"slide"}
      component={NavigationList}
      height={"100%"}
      opened={opened}
    />
  )
}




