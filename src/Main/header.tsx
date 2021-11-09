import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";

var visible=false;
const Header = () => {
  if(visible){
  return (
    <div >
     Header
    </div>
  );}
  else{
    return (
      <div >
       
      </div>
    );
  }
 
};
export default Header;