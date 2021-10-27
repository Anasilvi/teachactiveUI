import * as React from "react";


import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Typography } from "antd";

import LogoSmall from "./images/LogoSmall.png";
import { Link } from 'react-router-dom';

import "./login.css";

const { Title } = Typography;

export interface ILoginPageProps {}

export function LoginPage(props: ILoginPageProps) {
  const [showRememberMeCheckbox, setShowRememberMeCheckbox] = React.useState(
    false
  );

  return (
    <div className="loginPage">
      <div className="loginPageLeft">
        <img className="leftLogoSmall" src={LogoSmall} />
      </div>
      <div className="loginPageRight">
        <Form
          size="large"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 32 }}
          layout="vertical"
        >
          <Title>Login </Title>
          <Form.Item label="Email" required={true}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" required={true}>
            <Input.Password
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          {showRememberMeCheckbox && (
            <Form.Item wrapperCol={{ offset: 8, span: 32 }}>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
          )}
          <Form.Item wrapperCol={{ offset: 0, span: 32 }}>
          <Link to="/home" ><Button className="loginButton" >Login</Button></Link>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 32 }}>
            <Button type="link">Forgot password?</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
