import { Button, Col, Divider, Layout, Row, Typography } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavbar } from '../../../components/common/mainMenu';
import { Footer } from '../../../components/common/sharedLayout';
import image from "../../../img/back.png";

const { Content } = Layout;
const { Title } = Typography;

const box = {
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
}

export default () => {
  return (
    <Layout className='home layout' style={{ backgroundImage:`url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <HeaderNavbar />
      <Content>
        <Row align="middle">
          <Col style={{ top: '200px' }} span={24} align="middle">
            <Title level={3}>
              <Texty
                type="left"
                mode="random"
                style={{color:'#191970'}}
              >
                Welcome to Upasthit
              </Texty>
            </Title>
            <Texty
              type="left"
              mode="smooth"
              interval="20"
              style={{ 
                fontSize : 19,
                fontWeight : 'bold'
               }}
            >
              An attendance tracking system that uses face recognition
            </Texty>

            <br />
            <Button type='primary' htmlType='submit'>
              <Link to='/signup'>Get Started</Link>
            </Button>
            {/* <Divider /> */}
            <div style={{ paddingTop : '100px', fontWeight: 'bold' }}>
              First time user? Please visit <Link to='/userguidelines'> User Guidelines</Link>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};
