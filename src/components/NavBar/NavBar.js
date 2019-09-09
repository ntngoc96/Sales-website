import React from 'react';
import {  Row, Col, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo_transparent.png';

export class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Row className="py-3 ">
          <Col>
            <Nav>
              <NavItem>
                <img src={logo} width="50%" className="nav__logo" alt="logo" />
              </NavItem>
            </Nav>
          </Col>
          <Col xs="auto" className="navigation_nav font-weight-bold">
            <Nav>
              <NavItem className="nav__item">
                
                  <NavLink className="nav__link" to="/">Trang chủ</NavLink>
                
              </NavItem>
              <NavItem className="nav__item">
                
                  <NavLink className="nav__link" to="/introduction">Giới thiệu</NavLink>
                
              </NavItem>
              <NavItem className="nav__item">
                
                  <div className=" nav__service" >
                    <div className="nav__link">Dịch vụ &nbsp;<i className="fa fa-chevron-down"></i></div>
                    <div className="service__group">
                      <div className="service__item">Nâng cơ trẻ hóa da</div>
                      <div className="service__item">Tiêm filler căn mọng</div>
                      <div className="service__item">Botox thon gọn hàm</div>
                      <div className="service__item">Truyền trắng tinh khôi</div>
                      <div className="service__item">Tiêm tan mỡ đa liệu trình</div>
                    </div>
                  </div>
                
              </NavItem>
              <NavItem className="nav__item">
                
                  <NavLink className="nav__link" to="/news">Tin tức &nbsp;<i className="fa fa-chevron-down"></i></NavLink>
                
              </NavItem>
              <NavItem className="nav__item">
                
                  <NavLink className="nav__link" to="/promotion">Khuyến mãi</NavLink>
                
              </NavItem>
              <NavItem className="nav__item">
                
                  <NavLink className="nav__link" to="/add-product">Liên hệ</NavLink>
                
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}