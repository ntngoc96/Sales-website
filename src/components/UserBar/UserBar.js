import React from 'react';
import { Row, Col, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { UserService } from '../../auth/UserService';

import { AppContext } from '../../contexts';
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
      <NavItem className="user-nav__item">
        <NavLink to='/cart/all'>Kiểm tra đơn hàng&nbsp;&nbsp;<i className="fas fa-clipboard-list"></i></NavLink>
      </NavItem>
      <NavItem className="user-nav__item"  id="cart">
        <AppContext.Consumer>
          { ({CartItems}) =>(
            <NavLink to='/cart'>Giỏ hàng ({CartItems.length})&nbsp;&nbsp;<i className="fas fa-shopping-cart"></i></NavLink>
            )
          }
        </AppContext.Consumer>
      </NavItem>
      <NavItem className="user-nav__item">
        <NavLink to='/:id/profile'>Hello {userName} &nbsp;&nbsp;<i className="far fa-grin-hearts"></i></NavLink>
      </NavItem>
      <NavItem className="user-nav__item" onClick={()=> UserService.logout()}>
        <NavLink to=''>Đăng xuất &nbsp;&nbsp;<i className="fas fa-sign-out-alt"></i></NavLink>
      </NavItem>
      <NavItem className="user-nav__item">
        <NavLink to='/auth/admin'>Quản lý &nbsp;&nbsp;<i className="fas fa-cogs"></i></NavLink>
      </NavItem>
      
    </Nav>
  }
    else return  <Nav>
      <NavItem className="user-nav__item">
        <NavLink to='/cart/all'>Kiểm tra đơn hàng&nbsp;&nbsp;<i className="fas fa-clipboard-list"></i></NavLink>
      </NavItem>
      <NavItem className="user-nav__item" id="cart">
        <NavLink to='/cart' >Giỏ hàng&nbsp;&nbsp;<i className="fas fa-shopping-cart"></i></NavLink>
      </NavItem>
      <NavItem className="user-nav__item">
        <NavLink to='/login'>Đăng nhập&nbsp;&nbsp;<i className="fas fa-angle-double-left"></i></NavLink>
      </NavItem>
      <NavItem className="user-nav__item">
        <NavLink to='/register'>Đăng ký&nbsp;&nbsp;<i className="fas fa-angle-double-up"></i></NavLink>
      </NavItem>
    </Nav>

  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="user-navigation">
        <Row className="user-nav__color user-nav__font  px-5">
          <Col >
            <Nav>
              <NavItem className="user-nav__item">
                <NavLink to="/"><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;Liên hệ: 09650xxxxx</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="auto" >
            {this.displayOption(loggedIn)}
          </Col>
        </Row>
      </div>
    );
  }
}