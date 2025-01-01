import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Col, Divider, Row, Modal, Avatar, Tooltip } from "antd";
import { Calendar } from 'iconsax-react';
import store from "../../../redux/store";
import * as actions from "../../../redux/login/loginTypes";
import { UserLogout } from "../../../redux/login/loginActions";

export default function HeaderUser() {
  const handleLogout = async () => {
    store.dispatch({ type: actions.LOGOUT });
    UserLogout();
  };

  const handleLogoutModal = () => {
    Modal.confirm({
      title: 'Logout',
      content: 'Are you sure you want to logout?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: handleLogout
    });
  };

  const menu = (
    <div className="hp-user-dropdown hp-border-radius hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 hp-py-24 hp-px-18 hp-mt-16">
      <span className="hp-d-block h5 hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0 hp-mb-16">Profile Settings</span>
      <Link to="#" disabled className="hp-p1-body hp-font-weight-500 hp-hover-text-color-primary-2" >View Profile</Link>
      <Divider className="hp-mt-18 hp-mb-12" />
      <Row>
        <Col span={24}>
          <Link to="#" disabled className="hp-d-flex-center hp-p1-body hp-font-weight-500 hp-my-4 hp-py-8 hp-px-10 hp-d-block hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 hp-border-radius" style={{ marginTop: -7, marginLeft: -10, marginRight: -10 }}>
            <Calendar size="20" /><span className="hp-ml-8">Help Desk</span>
          </Link>
        </Col>
      </Row>
      <Divider className="hp-mb-18 hp-mt-12" />
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Link to="#" disabled className="hp-p1-body hp-font-weight-500 hp-hover-text-color-primary-2">Account Settings</Link>
        </Col>
        <Col span={24}>
          <span className="hp-p1-body hp-font-weight-500 hp-hover-text-color-primary-2 hp-cursor-pointer" onClick={handleLogoutModal}>Log out</span>
        </Col>
      </Row>
    </div>
  );

  const renderuserAvatar = useCallback(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      const splittedWords = userName?.split(' ');
      const userAvatar = splittedWords[0]?.charAt(0)?.toLocaleUpperCase();
      return userAvatar;
    }
    else {
      return "";
    };
  }, []);

  return (
    <Col className="hp-ml-18 hp-d-flex-center">
      <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
        <Tooltip title='Profile Settings' placement='bottomLeft' >
          <div className="custom-user-profile-avatar">
            <div className="hp-border-radius-lg hp-overflow-hidden hp-bg-info-4 hp-m-4 hp-d-flex" style={{ minWidth: 24, width: 24, height: 24 }}>
              <Avatar shape="circle" size={24} style={{ backgroundColor: "#fff" }}>
                <b style={{ color: "#00afd2", fontSize: "16px", fontWeight: 500 }}>{renderuserAvatar()}</b>
              </Avatar>
            </div>
          </div>
        </Tooltip>
      </Dropdown>
    </Col>
  );
};
