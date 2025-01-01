import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Col, Row, Menu, Dropdown, Button, Divider, Space } from "antd";
import { Calendar, ArrowUp, ArrowDown, Wallet2, WalletAdd, WalletMinus, ArrowRight2, Add } from 'iconsax-react';

import ColumnChart from "./chart/columnChart"
import CompanyDrawer from "../crm/components/drawer/CompanyDrawer";
import ContactDrawer from "../crm/components/drawer/ContactDrawer";
import DealDrawer from "../crm/components/drawer/DealDrawer";
import TicketDrawer from "../crm/components/drawer/TicketDrawer";

export default function Home() {
  const [selectedReport, setSelectedReport] = useState('Last 50 Days');
  const [drawerCompanyVisible, setCompanyDrawerVisible] = useState(false);
  const [drawerContactVisible, setContactDrawerVisible] = useState(false);
  const [drawerDealVisible, setDealDrawerVisible] = useState(false);
  const [drawerTicketVisible, setTicketDrawerVisible] = useState(false);

  const handleMenuClick = (e) => {
    setSelectedReport(e.key);
  };

  const showCompanyDrawer = (e) => { e.stopPropagation(); setCompanyDrawerVisible(true); };
  const showContactDrawer = (e) => { e.stopPropagation(); setContactDrawerVisible(true); };
  const showDealDrawer = (e) => { e.stopPropagation(); setDealDrawerVisible(true); };
  const showTicketDrawer = (e) => { e.stopPropagation(); setTicketDrawerVisible(true); };

  const onCompanyClose = () => { setCompanyDrawerVisible(false); };
  const onContactClose = () => { setContactDrawerVisible(false); };
  const onDealClose = () => { setDealDrawerVisible(false); };
  const onTicketClose = () => { setTicketDrawerVisible(false); };

  const menu = (
    <Menu onClick={handleMenuClick} style={{ width: 250, maxHeight: 300, overflowY: 'auto' }}>
      <Menu.Item key="All">All Reports</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="Today">Today</Menu.Item>
      <Menu.Item key="This Week">This Week</Menu.Item>
      <Menu.Item key="This Month">This Month</Menu.Item>
      <Menu.Item key="This Year">This Year</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="Last 10 days">Last 10 days</Menu.Item>
      <Menu.Item key="Last 25 Days">Last 25 Days</Menu.Item>
      <Menu.Item key="Last 50 Days">Last 50 Days</Menu.Item>
      <Menu.Item key="Last 100 days">Last 100 days</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Row gutter={[24, 24]} align="middle" justify='space-between'>
            <Col>
              <h1 class="h4 hp-mb-4">🚀 Dashboard</h1>
            </Col>
            <Col>
              <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <Button type="text" size='small'><Calendar size={18} className='hp-mr-8' /> {selectedReport} Report</Button>
              </Dropdown>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col span={24} sm={24} md={24} lg={16}>
              <Row gutter={[24, 24]}>
                <Col span={24} sm={24} md={8} lg={8}>
                  <Card size='small' className="hp-border-color-black-40">
                    <Row align='middle' justify='space-between'>
                      <Col>
                        <p className="hp-p1-body">Total Balance</p>
                        <h4 className="hp-mb-8">$35,543</h4>
                      </Col>
                      <Col>
                        <Wallet2 size={28} color='#0091ae' />
                      </Col>
                    </Row>
                    <Divider className='hp-my-12' />
                    <p className='hp-mb-0 hp-text-color-danger-1 hp-caption hp-font-weight-400'><ArrowDown size={10} className='hp-mr-4' /> 20% vs {selectedReport} Report</p>
                  </Card>
                </Col>
                <Col span={24} sm={24} md={8} lg={8}>
                  <Card size='small' className="hp-border-color-black-40">
                    <Row align='middle' justify='space-between'>
                      <Col>
                        <p className="hp-p1-body">Income</p>
                        <h4 className="hp-mb-8">$15,684</h4>
                      </Col>
                      <Col>
                        <WalletAdd size={28} color='#0091ae' />
                      </Col>
                    </Row>
                    <Divider className='hp-my-12' />
                    <p className='hp-mb-0 hp-text-color-success-1 hp-caption'><ArrowUp size={10} className='hp-mr-4' /> 20% vs {selectedReport} Report</p>
                  </Card>
                </Col>
                <Col span={24} sm={24} md={8} lg={8}>
                  <Card size='small' className="hp-border-color-black-40">
                    <Row align='middle' justify='space-between'>
                      <Col>
                        <p className="hp-p1-body">Spending</p>
                        <h4 className="hp-mb-8">$1,654</h4>
                      </Col>
                      <Col>
                        <WalletMinus size={28} color='#0091ae' />
                      </Col>
                    </Row>
                    <Divider className='hp-my-12' />
                    <p className='hp-mb-0 hp-text-color-danger-1 hp-caption hp-font-weight-400'><ArrowDown size={10} className='hp-mr-4' /> 20% vs {selectedReport} Report</p>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card size='small' className="hp-border-color-black-40">
                    <Row gutter={[18, 18]}>
                      <Col span={24}>
                        <Row gutter={[6, 6]} justify="space-between">
                          <Col>
                            <h4 className="hp-mb-8">CRM Reports</h4>
                          </Col>
                          <Col>
                            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                              <Button type="text" size='small'><Calendar size={18} className='hp-mr-8' /> {selectedReport} Report</Button>
                            </Dropdown>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24}>
                        <ColumnChart />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={24} sm={24} md={24} lg={8}>
              <Row gutter={[18, 18]}>
                <Col span={24}>
                  <Card size='small' className="hp-border-color-black-40 hp-border-color-dark-80">
                    <h4 className="h5 hp-mb-8">23 - Contacts</h4>
                    <p className="hp-p1-body hp-mb-12">See the people associated with this record.</p>
                    <Divider className='hp-my-8' />
                    <Space className='hp-w-100' style={{ justifyContent: 'space-between' }}>
                      <Button type='link' size='small' className='hp-p-0' onClick={showContactDrawer}><Add size={14} className='hp-mr-6' /> Create</Button>
                      <Link to="/crm/contacts"><Button type='link' size='small' className='hp-p-0'>View All <ArrowRight2 size={14} className='hp-ml-6' /></Button></Link>
                    </Space>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card size='small' className="hp-border-color-black-40 hp-border-color-dark-80">
                    <h4 className="h5 hp-mb-8">8 - Companies</h4>
                    <p className="hp-p1-body hp-mb-12">See the businesses or organizations associated with this record.</p>
                    <Divider className='hp-my-8' />
                    <Space className='hp-w-100' style={{ justifyContent: 'space-between' }}>
                      <Button type='link' size='small' className='hp-p-0' onClick={showCompanyDrawer}><Add size={14} className='hp-mr-6' /> Create</Button>
                      <Link to="/crm/companies"><Button type='link' size='small' className='hp-p-0'>View All <ArrowRight2 size={14} className='hp-ml-6' /></Button></Link>
                    </Space>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card size='small' className="hp-border-color-black-40 hp-border-color-dark-80">
                    <h4 className="h5 hp-mb-8">56 - Deals</h4>
                    <p className="hp-p1-body hp-mb-12">Track the revenue opportunities associated with this record.</p>
                    <Divider className='hp-my-8' />
                    <Space className='hp-w-100' style={{ justifyContent: 'space-between' }}>
                      <Button type='link' size='small' className='hp-p-0' onClick={showDealDrawer}><Add size={14} className='hp-mr-6' /> Create</Button>
                      <Link to="/crm/deals"><Button type='link' size='small' className='hp-p-0'>View All <ArrowRight2 size={14} className='hp-ml-6' /></Button></Link>
                    </Space>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card size='small' className="hp-border-color-black-40 hp-border-color-dark-80">
                    <h4 className="h5 hp-mb-8">125 - Tickets</h4>
                    <p className="hp-p1-body hp-mb-12">Track the customer requests associated with this record.</p>
                    <Divider className='hp-my-8' />
                    <Space className='hp-w-100' style={{ justifyContent: 'space-between' }}>
                      <Button type='link' size='small' className='hp-p-0' onClick={showTicketDrawer}><Add size={14} className='hp-mr-6' /> Create</Button>
                      <Link to="/crm/tickets"><Button type='link' size='small' className='hp-p-0'>View All <ArrowRight2 size={14} className='hp-ml-6' /></Button></Link>
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <ContactDrawer visible={drawerContactVisible} onClose={onContactClose} /> */}
      {/* <CompanyDrawer visible={drawerCompanyVisible} onClose={onCompanyClose} /> */}
      {/* <DealDrawer visible={drawerDealVisible} onClose={onDealClose} /> */}
      {/* <TicketDrawer visible={drawerTicketVisible} onClose={onTicketClose} /> */}
    </>
  );
};
