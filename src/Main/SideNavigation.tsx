import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { AiOutlineMenu, AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined, 
} from "@ant-design/icons";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "./styles.css";

import "react-pro-sidebar/dist/css/styles.css";
import LogoSmall from "../Login/images/LogoSmall.png";
import { useHistory } from "react-router-dom";
import { ComponentRoute, routes } from "./routes";
import { SidebarContext } from "react-pro-sidebar/dist/ProSidebar/ProSidebar";

import { Dropdown, Button, Space } from 'antd';
import {BiArrowToLeft, BiHelpCircle, BiArrowToRight} from 'react-icons/bi';
import Item from "antd/lib/list/Item";


import MetricPage from "../Pages/metricPage";
import Header from "./header";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [className, setClassName] = useState('unselectedItem');
  const [pageName, setPageName] = useState(<MetricPage/>);
var actualIndex =0;


  
  // added styles 
  
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
   
  };

  const changeIndex = (selected:boolean) => {
    { selected
      ?  setClassName('selectedItem')
      :  setClassName('unselectedItem')
    }
  
  };


  const changePage = (newcomponent: any) => {
    setPageName(newcomponent);

  };



const history = useHistory();
  
  return (
    <div className="contentDiv">
    <div  color="#d83636" id="sidebar" >
    <ProSidebar color="#d83636" collapsed={collapsed}>
      <SidebarHeader >
       
           <img className="topMainLogo" src={LogoSmall} />
          
        
      </SidebarHeader>
      
                <SidebarContent className='center'><AiOutlineUser className = 'userMenu'/>  <Button className='label' type="link">Logout</Button>
        </SidebarContent>
      <Menu iconShape="square" >
      {routes
              .filter((item: ComponentRoute) => item.inSidebar)
              .map((item: ComponentRoute, i: number) => (
                <MenuItem  className = {className}
                  key={i}
                  icon={item.icon}
                  title={item.name}
                  //onClick={() => history.push(item.link())}
                  //onClick={() => changeIndex(!item.selected)}
                  onClick={() => changePage(item.component)}
                >
                  {item.name}
                </MenuItem>
              ))}
        
      </Menu>
      
      <SidebarContent> <SidebarContent className='center' ><BiHelpCircle size={20}/>  <Button className='label' type="link">Help</Button>
        </SidebarContent>
        </SidebarContent>
      <SidebarFooter>
        <div className='menuIcon' onClick={onClickMenuIcon} >
         
          { collapsed
          ?  <BiArrowToRight size={25} />
          :  <BiArrowToLeft size={25} />
        }
        </div>
       
      </SidebarFooter>
    </ProSidebar>
    
  </div>
  <div className="contentMagin">
  <div><Header></Header></div>
    <div>
       {pageName}
       </div>
       
      </div>
    </div>
    
  );
};
export default SideNavigation;

