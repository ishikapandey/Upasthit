import { Avatar } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context';
import { StudentMenu } from './';
import './StudentSiderNavbar.css';
import { APP_LOGO_URL } from '../../assets';

export default () => {
  const { collapsed } = useContext(NavbarContext);
  return (
    <div className='studentSiderNavbar'>
      <Link to='/dashboard'>
        <div className='studentSiderNavbar__logo'>
          {/* <Avatar
            shape="square"
            className='avatar'
            size='large'
            alt='Face In'
            title='Face in (Student Version)'
            src={process.env.PUBLIC_URL + '/img/logo.png'}
            onError={(err) => {
              console.log(err);
            }}
          /> */}
          <div
            className={
              !collapsed
                ? 'studentSiderNavbar__text'
                : 'studentSiderNavbar__text__hidden'
            }
          >
            <span className='studentSiderNavbar__text__item'>Student</span>
          </div>
        </div>
      </Link>

      <div className='studentSiderNavbar__menu'>
        <StudentMenu />
      </div>
    </div>
  );
};
