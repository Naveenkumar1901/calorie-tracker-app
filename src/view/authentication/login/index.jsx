import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Checkbox, Space, Card, Modal, Spin } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import Logo from '../../../assets/images/logo/logo.png';
import GuyImg from '../../../assets/images/login-guy-image.png';

export default function LoginScreen() {
    const [spinStatus, setSpinStatus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [resetPasswordPage, setResetPasswordPage] = useState(false);
    const [loginCredentials, setLoginCredentials] = useState({});
    const [userData, setUserData] = useState(null);
    const loginFormRef = useRef();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSpaceKeyDown = (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        };
    };

    const handleLogin = async () => {

    };

    const emailValidationRule = () => ({
        validator(_, value) {
            if (value === "manager" || /^\S+@\S+\.\S+$/.test(value)) {
                return Promise.resolve();
            };
            return Promise.reject(new Error('Please enter a valid E-mail!'));
        },
    });

    if (resetPasswordPage && userData?.userName && loginCredentials?.token) {
        return (<Redirect to={`/reset-password?user=${userData.userName}&token=${loginCredentials.token}`} />);
    };

    return (
        <Spin spinning={spinStatus} size='large'>
            <div className='login-screen hp-px-18 hp-pt-18 hp-pb-0 hp-h-100'>
                <Row gutter={[18, 18]} align='middle' justify="center" className='hp-h-100'>
                    <Col span={24} sm={24} md={24} lg={22} xl={19}>
                        <Row gutter={[18, 18]} className='hp-h-100' align='middle' justify="space-between">
                            <Col span={24} sm={24} md={24} lg={9}>
                                <div className='login-area'>
                                    <div className='hp-my-18 hp-w-100 hp-text-center'>
                                        <img src={Logo} width={220} />
                                    </div>
                                    <Card>
                                        <Form ref={loginFormRef} onFinish={handleLogin} initialValues={{ remember: true }} layout='vertical'>
                                            <Form.Item label="Email Address" name="userName"
                                                rules={[{ required: true, message: "", whitespace: true }, emailValidationRule]}>
                                                <Input placeholder="Enter Your Email" onKeyDown={handleSpaceKeyDown} onInput={(e) => e.target.value = ("" + e.target.value).toLowerCase()} />
                                            </Form.Item>
                                            <Form.Item label="Password" name="password" rules={[{ required: true, message: "", whitespace: true, }]}>
                                                <Input.Password placeholder="Enter Password" type={showPassword ? 'text' : 'password'}
                                                    iconRender={(visible) => visible ? <EyeOutlined onClick={handleShowPassword} /> : <EyeInvisibleOutlined onClick={handleShowPassword} />}
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Checkbox name="remember">Remember me</Checkbox>
                                                <Link className="login-form-forgot hp-float-right hp-hover-text-color-primary-3" to="/forgot-password">
                                                    Forgot password
                                                </Link>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" block>Login</Button>
                                            </Form.Item>
                                        </Form>
                                    </Card>
                                </div>
                            </Col>
                            <Col span={24} sm={24} md={24} lg={15}>
                                <Row align='middle' justify='end'>
                                    <Col span={24} sm={24} md={24} lg={18}>
                                        <div className='hp-w-100'>
                                            <h4 className='h1 hp-font-size-600 hp-mb-8' style={{ color: '#0091ae' }}>80%</h4>
                                            <h4 className='h4 hp-font-size-500 hp-mb-0'>of marketing and creative professionals consider personalization one of the most effective ways of connecting with a consumer</h4>
                                        </div>
                                        <Space className='hp-my-12'>
                                            <Button type="primary" className='hp-px-24'>Get started free</Button>
                                            <Button type="primary" className='hp-bg-color-black-0 hp-text-color-primary-1 hp-px-24'>Get a demo</Button>
                                        </Space>
                                        <p>Create a free account or learn how our software can help you grow your business</p>
                                        <div className='hp-w-100 hp-d-block hp-text-left'>
                                            <img src={GuyImg} alt="Guy" width={320} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Spin>
    );
};