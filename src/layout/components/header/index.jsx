import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';
import { Layout, Button, Row, Col, Tooltip } from "antd";
import { Setting2 } from 'iconsax-react';
import { RiMenuFill } from "react-icons/ri";
import HeaderSearch from './HeaderSearch';
import HeaderUser from "./HeaderUser";
import HeaderNotifications from "./HeaderNotifications";
import HeaderLanguages from "./HeaderLanguages";

const { Header } = Layout;

export default function MenuHeader(props) {
  const [searchHeader, setSearchHeader] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const { authorizedPages } = useSelector((state) => state.settings);
  const inputFocusRef = useRef(null);
  const { setVisible } = props;

  const renderSettingsEndPoint = () => {
    if (authorizedPages?.length > 0) {
      const matchedSettingsPage = authorizedPages?.find((eachPage) => (eachPage.displayName === "Settings"));
      const firstSettingsSubScreen = matchedSettingsPage?.subPages[0]?.subScreen;

      return firstSettingsSubScreen;
    };
  };

  const showDrawer = () => {
    setVisible(true);
    setSearchHeader(false);
  };

  const inputFocusProp = {
    ref: inputFocusRef,
  };

  setTimeout(() => setSearchActive(searchHeader), 100);

  const headerChildren = () => {
    return (
      <Row className="hp-w-100 hp-position-relative" align="middle" justify="space-between">
        <Col className="hp-mobile-sidebar-button hp-mr-24">
          <Button type="none" ghost className="hp-mobile-sidebar-button hp-border-none" onClick={showDrawer} icon={<RiMenuFill size={20}
            className="remix-icon hp-text-color-black-0 hp-text-color-dark-30" />} />
        </Col>
        <Col flex="1" className={`hp-mr-md-0 hp-mr-16 hp-pr-0 hp-header-search hp-header-search-active`}>
          <div className="hp-header-search-area">
            <HeaderSearch inputFocusProp={inputFocusProp} setSearchHeader={setSearchHeader} />
          </div>
        </Col>
        <Col>
          <Row align="middle" >
            {/* <HeaderLanguages /> */}
            <Col className="hp-d-flex-center">
              <Tooltip title="Settings" placement="bottom">
                <Button type="link" className="header-settings-button-icon">
                  <Link to={renderSettingsEndPoint()}>
                    <Setting2 className="hp-float-left" size="18" />
                  </Link>
                </Button>
              </Tooltip>
            </Col>
            <HeaderNotifications />
            <HeaderUser />
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <Header>
      <Row justify="center" className="hp-w-100">
        <Col span={24}>
          <motion.div className="hp-w-100" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, delay: 0.1 }}>
            {headerChildren()}
          </motion.div>
        </Col>
      </Row>
    </Header>
  );
};