import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ArrowLeft2, HambergerMenu } from 'iconsax-react';

import { useSelector } from 'react-redux';

import { Layout, Row, Col } from "antd";
import { motion } from 'framer-motion';

import MenuLogo from "./logo";
import MenuFooter from "./footer";
import MenuItem from "./item";
import MenuMobile from "./mobile";

const { Sider } = Layout;

export default function Sidebar(props) {
    const { visible, setVisible } = props;

    // Redux
    const customise = useSelector(state => state.customise)

    // Collapsed
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (customise.sidebarCollapsed) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }, [customise])

    // Location
    const location = useLocation();

    // Mobile Sidebar
    const onClose = () => {
        setVisible(false);
    };

    // Menu
    function toggle() {
        setCollapsed(!collapsed);
    }

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={220}
            className="hp-sidebar hp-bg-black-20 hp-bg-color-dark-90"
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
                className="hp-d-flex hp-h-100"
                style={{ flexDirection: 'column' }}
            >
                <Row align="middle" justify="space-between">
                    <Col>
                        {collapsed === false ? <MenuLogo onClose={onClose} /> : ""}
                    </Col>

                    {
                        customise.sidebarCollapseButton && (
                            collapsed === false ? (
                                <Col className="hp-pr-0">
                                    <div className="hp-cursor-pointer" onClick={toggle}>
                                       <ArrowLeft2 color="#fff" size={16} />
                                    </div>
                                </Col>
                            ) : (
                                <Col span={24} className="hp-d-flex-full-center">
                                    <div className="hp-cursor-pointer" onClick={toggle}>
                                        <HambergerMenu color="#fff" size={20} />
                                    </div>
                                </Col>
                            )
                        )
                    }

                    {collapsed && (
                        <Col span={24} className="hp-mt-12 hp-d-flex-full-center">
                            <MenuLogo onClose={onClose} small={true} />
                        </Col>
                    )}
                </Row>

                <MenuItem onClose={onClose} />

                <MenuMobile onClose={onClose} visible={visible} />
            </motion.div>
        </Sider>
    );
};
