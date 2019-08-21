import React from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { UserService } from '../../auth/UserService';

export class UserBar extends React.Component {
  constructor() {
    super();

    let token = localStorage.getItem('token');

    this.state = {
      loggedIn: token ? true : false,
    }




  }

  displayOption = (isLoggedIn) => {
    if (isLoggedIn){
      let userName = localStorage.getItem('user');
      userName = atob(userName);
      return  <Nav>
      <NavItem className="user-nav__item--border-both">
        <NavLink to='/cart/all'>Kiểm tra đơn hàng</NavLink>
      </NavItem>
      <NavItem className="user-nav__item--border-right">
        <NavLink to='/cart'>Giỏ hàng</NavLink>
      </NavItem>
      <NavItem className="user-nav__item--border-right">
        <NavLink to='/:id/profile'>Hello {userName}</NavLink>
      </NavItem>
      <NavItem className="user-nav__item--border-right" onClick={()=> UserService.logout()}>
        <NavLink to=''>Đăng xuất</NavLink>
      </NavItem>
      
    </Nav>
  }
    else return  <Nav>
      <NavItem className="user-nav__item--border-both">
        <NavLink to='/cart/all'>Kiểm tra đơn hàng</NavLink>
      </NavItem>
      <NavItem className="user-nav__item--border-right">
        <NavLink to='/cart'>Giỏ hàng</NavLink>
      </NavItem>
      <NavItem className="user-nav__item--border-right">
        <NavLink to='/login'>Đăng nhập</NavLink>
      </NavItem>
      <NavItem className="user-nav__item--border-right">
        <NavLink to='/register'>Đăng ký</NavLink>
      </NavItem>
    </Nav>

  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Container>
        <Row className="user-nav__color user-nav__font user-nav__border px-5">
          <Col >
            <Nav>
              <NavItem className="user-nav__item--border-both">
                <NavLink to="/">Liên hệ: 09650xxxxx</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="auto" >
            {this.displayOption(loggedIn)}
          </Col>
        </Row>
      </Container>
    );
  }
}