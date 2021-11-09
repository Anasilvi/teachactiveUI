/**
 * Contains the routes to be available in the dashboard
 */

 import React from "react";

 import {
   UploadOutlined,
   UserOutlined,
   VideoCameraOutlined, 
 } from "@ant-design/icons";
 import { AiOutlineMenu, AiOutlineDashboard, AiOutlineUser, AiOutlineMessage, AiOutlineLineChart } from "react-icons/ai";
 import {
   GoalsPage,
   ProgressPage,
   MetricPage,
   SettingsPage,
   GettingStartedPage,
   SignInPage,
 } from "../Pages";
 //import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
 //import apiHandler from "./api/handler";
 
 export class ComponentRoute {
   name: string;
   path: string;
   component: React.ReactNode;
   icon: any;
   link: (id?: string) => string;
   inSidebar: boolean;
   exact: boolean;
   secure: boolean;
   index:number;
   selected: boolean;
 
   constructor(data: any) {
     this.name = data.name;
     this.path = data.path;
     this.component = data.component;
     this.icon = data.icon;
     this.link = data.link;
     this.inSidebar = data.inSidebar;
     this.exact = data.exact;
     this.secure = data.secure;
     this.index = data.index;
     this.selected = data.selected;
   }
 }
 
 export const BaseRoute: ComponentRoute = new ComponentRoute({
   name: "Base",
   path: "/",
   component: <GettingStartedPage />,
   icon: <UserOutlined />,
   link: () => "/",
   inSidebar: false,
   exact: true,
   secure: false,
 });
 export const MetricsRoute: ComponentRoute = new ComponentRoute({
   name: "Metrics",
   path: "/metrics",
   component: <MetricPage />,
   icon: <AiOutlineDashboard size={35}/>,
   link: () => "/metrics",
   inSidebar: true,
   exact: true,
   secure: true,
   index: 1,
   selected: false,
 });
 export const ProgressRoute: ComponentRoute = new ComponentRoute({
   name: "Progress",
   path: "/progress",
   component: <ProgressPage />,
   icon: <AiOutlineLineChart size={35}/>,
   link: () => "/progress",
   inSidebar: true,
   exact: true,
   secure: true,
   index: 2,
   selected: false,
 });
 export const GoalsRoute: ComponentRoute = new ComponentRoute({
   name: "Reflections & Goals",
   path: "/goals",
   component: <GoalsPage />,
   icon: (
     <>
       <AiOutlineMessage size={35}/>{" "}
     </>
   ),
   link: () => "/goals",
   inSidebar: true,
   exact: true,
   secure: true,
   index: 3,
   selected: false,
 });
 export const SettingsRoute: ComponentRoute = new ComponentRoute({
   name: "Settings",
   path: "/settings",
   component: <SettingsPage />,
   icon: <VideoCameraOutlined />,
   link: () => "/settings",
   inSidebar: false,
   exact: true,
   secure: true,
 });
 export const SignInRoute: ComponentRoute = new ComponentRoute({
   name: "Sign In",
   path: "/login",
   component: <SignInPage />,
   icon: <VideoCameraOutlined />,
   link: () => "/login",
   inSidebar: false,
   exact: true,
   secure: false,
 });
 
 export const routes: ComponentRoute[] = [
   BaseRoute,
   MetricsRoute,
   ProgressRoute,
   GoalsRoute,
   SettingsRoute,
   SignInRoute,
 ];