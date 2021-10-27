import Header from "./header";
import SideNavigation from "./SideNavigation";
import { Col, Row } from "reactstrap";
import * as React from "react";
import "../Pages/styles.css";

export interface IMainPageProps {}

export function MainPage(props: IMainPageProps) {
  const [showRememberMeCheckbox, setShowRememberMeCheckbox] = React.useState(
    false
  );

  return (<>
    <div className="contentDiv">
    <SideNavigation></SideNavigation>
      
        <div className="contentMagin">
        <h1 >This is Content Area</h1>
      </div>
    </div>
  </>
);
  }
