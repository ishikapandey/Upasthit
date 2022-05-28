import {
  HomeOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import { useQuery } from '@apollo/react-hooks';
import { Menu } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EnrolmentContext, NavbarContext } from '../../context';
import { CheckError } from '../../utils/ErrorHandling';
import './StudentSiderNavbar.css';


export default () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const { enrolCount, getEnrolCount } = useContext(EnrolmentContext);

  const { collapsed } = useContext(NavbarContext);

  return (
    <Menu theme='dark' mode='vertical' defaultSelectedKeys={[path]} style={{ color: "white"}}>
      <Menu.Item key={'dashboard'} icon={<HomeOutlined />}>
        <Link to={'/dashboard'}>Courses</Link>
      </Menu.Item>
      <Menu.Item key={'facegallery'} icon={<PictureOutlined />}>
        <Link to={'/facegallery'}>Face Gallery</Link>
      </Menu.Item>
    </Menu>
  );
};
