import React from "react";
import { Link } from "react-router-dom";

import { Divider, Avatar, Row, Col } from "antd";
import { RiSettings3Line } from "react-icons/ri";

import IntlMessages from "../../lang/IntlMessages";
import avatar from "../../../../assets/images/memoji/user-avatar-8.png";

export default function MenuFooter(props) {
  return (
    props.collapsed === false ? (
      <Row
        className="hp-sidebar-footer hp-bg-color-dark-90"
        align="middle"
        justify="space-between"
      >
        <Divider className="hp-border-color-black-40 hp-border-color-dark-70 hp-mt-0" />

        <Col>
          <Row align="middle">
            <Avatar size={48} src={avatar} className="hp-bg-info-4 hp-mr-8" />

            <div>
              <span className="hp-d-block hp-text-color-black-0 hp-text-color-dark-0 hp-p1-body hp-mb-6" style={{ lineHeight: 1 }}>
                Jane Doe
             </span>

              <p className="hp-badge-text hp-text-color-black-0 hp-text-color-dark-0 hp-font-weight-400 hp-mb-0">Avaniko</p>
            </div>
          </Row>
        </Col>

        <Col>
          <Link
            to="#"
            onClick={props.onClose}
          >
            <RiSettings3Line
              className="remix-icon hp-text-color-black-100 hp-text-color-dark-0"
              size={24}
            />
          </Link>
        </Col>
      </Row>
    ) : (
      <Row
        className="hp-sidebar-footer hp-bg-color-dark-90"
        align="middle"
        justify="center"
      >
        <Col>
          <Link
            to="#"
            onClick={props.onClose}
          >
            <Avatar size={48} src={avatar} className="hp-bg-info-4" />
          </Link>
        </Col>
      </Row>
    )
  );
};