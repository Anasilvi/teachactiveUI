import * as React from "react";

import { Menu, Dropdown, Button, Space } from 'antd';
import MainLogo from "./images/MainLogo.png";
import dashboardIcon from "./images/dashboard.png";
import goalsIcon from "./images/goals.png";
import progressIcon from "./images/progress.png";
import reflectionsIcon from "./images/reflections.png";
import userIcon from "./images/user.png";
import { Link } from 'react-router-dom';


import "./styles.css";

export interface IHomePageProps {
    
}

export function HomePage(props: IHomePageProps) {

  
  
    return (
      <div className="homePage">
          <div className = "homeMenu"><Dropdown overlay={menu} placement="bottomRight" >
                    <Button className = "userMenuButton"> </Button>
                </Dropdown></div>
           
        <div className="homePageTop">
            <img className="topMainLogo" src={MainLogo} />
    </div>
        <div className="homePageCenter">
            <p className ="title"><b>Welcome back Dana! </b></p>
            <div>
            <p className ="subtitle">What would you like to see today? </p>
            </div>
        </div>
        
        <div className="homePageBottom">
        <Link to="/dashboard" ><Button className="mainMenuButton" >
                <div>
                <img className="mainMenuIcon" src={dashboardIcon}/>
                <p className ="subtitle">Dashboard</p>
                </div>
                </Button></Link>

                <Button className="mainMenuButton">
                <div>
                <img className="mainMenuIcon" src={reflectionsIcon}/>
                <p className ="subtitle">Reflections</p>
                </div>
                </Button>

                <Button className="mainMenuButton">
                <div>
                <img className="mainMenuIcon" src={goalsIcon}/>
                <p className ="subtitle">Goals</p>
                </div>
                </Button>

                <Button className="mainMenuButton">
                <div>
                <img className="mainMenuIcon" src={progressIcon}/>
                <p className ="subtitle">Progress</p>
                </div>
                </Button>
            
        </div>
      </div>
    );
  }
  
  



const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
    <Link to="/" ><a target="_blank" rel="noopener noreferrer" >
        Logout
      </a></Link>
    </Menu.Item>
  </Menu>
);

  