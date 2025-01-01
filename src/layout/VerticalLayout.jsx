import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Row, Col, Modal } from "antd";
import Sidebar from "./components/menu/Sidebar";
import MenuHeader from "./components/header";
import { UserLogout } from "../redux/login/loginActions";

const { Content } = Layout;

export default function VerticalLayout(props) {
    const [visible, setVisible] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [redirectToPage, setRedirectToPage] = useState("/login");
    const customise = useSelector(state => state.customise);
    const { isAuthenticated } = useSelector((state) => state.login);

    const { children } = props;

    const showErrorModal = () => {
        Modal.error({
            title: 'Error',
            content: 'You are not authorized to use this application. For assistance, please contact your administrator.',
            okText: 'OK',
            cancelButtonProps: {
                style: { display: 'none' }
            },
            onOk: () => {
                UserLogout();
                window.location.reload();
            }
        });
    };

    if (redirect) {
        setTimeout(() => {
            setRedirect(false);
        }, 20);
        return (<Navigate to={redirectToPage} />);
    };

    return (
        isAuthenticated ?
            (<Layout className="hp-app-layout">
                <Sidebar visible={visible} setVisible={setVisible} />
                <Layout>
                    <MenuHeader setVisible={setVisible} />
                    <Content className="hp-content-main">
                        <Row justify="center">
                            {customise.contentWidth === "full" &&
                                (<Col span={24}>
                                    {children}
                                </Col>)}
                            {customise.contentWidth === "boxed" &&
                                (<Col className="hp-w-100" style={{ maxWidth: 936 }}>
                                    {children}
                                </Col>)}
                        </Row>
                    </Content>
                </Layout>
            </Layout>)
            : (<Navigate to="/login" />)
    );
};