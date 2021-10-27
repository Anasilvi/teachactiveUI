import { useState } from "react";
import { AiOutlineMenu, AiOutlineDashboard } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "../Pages/styles.css";

import "react-pro-sidebar/dist/css/styles.css";
import LogoSmall from "../Login/images/LogoSmall.png";
import { useHistory } from "react-router-dom";


const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [bgColor, setColor] = useState('#00b4b8');
  const [itemSelected] = useState(0);
  
  // added styles 
  
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  const onSelectMenuIcon = () => {
    
      setColor('#ffffff');
    
  };

  
  
  return (
    <div  color="#d83636" className="sideBar" id="sidebar" >
    <ProSidebar color="#d83636" collapsed={collapsed}>
      <SidebarHeader>
        <div className='menuIcon' onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square" >
      <div className="center">
        <img className="sidebarLogo" src={LogoSmall} />
      </div>
        <MenuItem  style={{backgroundColor:bgColor}}  onClick={onSelectMenuIcon}> <div className="center">{<AiOutlineDashboard size={'90%'} min-size={'70px'} /> }</div> <div className="sidebarText">Dashboard</div></MenuItem>
        <SubMenu title="Reflections"  className='menuItem'>
          <MenuItem>Hand Raises</MenuItem>
          <MenuItem>Student Speech</MenuItem>
          <MenuItem>Instructor Speech</MenuItem>
        </SubMenu>
        <SubMenu title="Goals" icon={<FaHeart />} className='menuItem'>
          <MenuItem>Actual Goals</MenuItem>
          <MenuItem>Set New Goals</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaGem />} className='menuItem'>Progress</MenuItem>
        
      </Menu>
    </ProSidebar></div>
  );
};
export default SideNavigation;